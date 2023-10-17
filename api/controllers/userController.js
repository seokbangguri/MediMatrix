const bcrypt = require('bcrypt');
const pool = require("../dbPool");
const saltRounds = parseInt(process.env.HASH_SALT);

async function signup(req, res) {
  // 회원가입 로직 구현
  try {
    const { name, email, password, hospitalName, phoneNumber, role } = req.body;

    // 비밀번호 해싱 비동기 처리
    const hash = await bcrypt.hash(password, saltRounds);

    // MySQL 데이터베이스 연결
    const connection = await pool.getConnection();

    // 중복 이메일 검사
    const [existingTherapist] = await connection.execute(
      "SELECT * FROM therapists WHERE email = ?",
      [email]
    );
    const [existingAdmin] = await connection.execute(
      "SELECT * FROM administrators WHERE email = ?",
      [email]
    );

    if (existingTherapist.length > 0 || existingAdmin.length > 0) {
      // 중복된 이메일이 이미 존재하는 경우
      res.status(400).json({ error: "중복된 이메일입니다." });
    } else {
      // 비밀번호 해싱 비동기 처리
      const hash = await bcrypt.hash(password, saltRounds);

      // 데이터베이스에 회원 정보 추가
      const [result] = await connection.execute(
        `INSERT INTO ${role === "administrators" ? "administrators (name, email, password, hospital, hp) VALUES (?, ?, ?, ?, ?)" : "therapists (name, email, password, hospital, hp) VALUES (?, ?, ?, ?, ?)"
        }`,
        [name, email, hash, hospitalName, phoneNumber]
      );

      connection.release();

      // 회원가입 성공
      res.status(201).json({ message: "회원가입 성공" });
    }
  } catch (error) {
    console.error("에러", error);
    res.status(500).json({ error: "회원가입 중 오류가 발생했습니다." });
  }
}

async function signin(req, res) {
  // 로그인 로직 구현
  try {
    const { email, password } = req.body;

    // MySQL 데이터베이스 연결
    const connection = await pool.getConnection();

    // therapists 테이블에서 이메일로 사용자 정보 검색
    const [therapists] = await connection.execute(
      "SELECT * FROM therapists WHERE email = ?",
      [email]
    );

    // administrators 테이블에서 이메일로 사용자 정보 검색
    const [administrators] = await connection.execute(
      "SELECT * FROM administrators WHERE email = ?",
      [email]
    );

    let user = null;

    if (therapists.length > 0) {
      // therapists 테이블에서 사용자 발견
      user = therapists[0];
    } else if (administrators.length > 0) {
      // administrators 테이블에서 사용자 발견
      user = administrators[0];
    }

    if (user) {
      // 비밀번호 비교
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // 로그인 성공
        res.status(200).json({ message: "로그인 성공", user: user });
      } else {
        // 비밀번호가 일치하지 않는 경우
        res.status(401).json({ error: "유효하지 않은 이메일 또는 비밀번호입니다." });
      }
    } else {
      // 사용자를 찾을 수 없는 경우
      res.status(401).json({ error: "유효하지 않은 이메일 또는 비밀번호입니다." });
    }

    connection.release();

  } catch (error) {
    console.error("에러", error);
    res.status(500).json({ error: "로그인 중 오류가 발생했습니다." });
  }
}

async function loadUserData(req, res) {
  // 사용자 데이터 로드 로직 구현
  try {
    const { email, role } = req.body;
    let user = null;

    const connection = await pool.getConnection();

    if (role == 'administrators') {
      const [administrators] = await connection.execute(
        "SELECT * FROM administrators WHERE email = ?",
        [email]
      )
      user = administrators[0];
    }
    else if (role == 'therapists') {
      const [therapists] = await connection.execute(
        "SELECT * FROM therapists WHERE email = ?",
        [email]
      )
      user = therapists[0];
    }

    if (user != null) {
      // 사용자 데이터를 클라이언트로 응답으로 보냅니다.
      res.status(200).json({
        email: user.email,
        name: user.name,
        hospitalName: user.hospital,
        phoneNumber: user.hp,
      });
    } else {
      // 사용자를 찾을 수 없을 경우 적절한 응답을 보냅니다.
      res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }

    connection.release();

  } catch (error) {
    console.error("에러", error);
    res.status(500).json({ error: "데이터 불러오기 실패" });
  }
}

async function updateData(req, res) {
  // 사용자 정보 업데이트 로직 구현
  try {
    const { email, name, hospitalName, phoneNumber, role, pemail } = req.body;
    console.log(req.body);

    // MySQL 데이터베이스 연결
    const connection = await pool.getConnection();

    // 사용자 데이터 업데이트
    const [result] = await connection.execute(
      `UPDATE ${role} SET name = ?, email = ?, hp = ?, hospital = ? WHERE email = ?`,
      [name, email, phoneNumber, hospitalName, pemail]
    );

    connection.release();

    if (result.affectedRows === 1) {
      // 업데이트가 성공한 경우
      res.status(200).json({ message: "사용자 데이터 업데이트 성공" });
    } else {
      // 업데이트가 실패한 경우 (해당 이메일을 가진 사용자를 찾을 수 없음)
      res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }
  } catch (error) {
    console.error("사용자 데이터 업데이트 에러:", error);
    res.status(500).json({ error: "데이터 업데이트 중 오류가 발생했습니다." });
  }
}

async function updatePassword(req, res) {
  // 비밀번호 업데이트 로직 구현
  try {
    const { currentPW, newPW, email, role } = req.body;
    let user = null;

    const connection = await pool.getConnection();

    if (role == 'administrators') {
      const [administrators] = await connection.execute(
        "SELECT * FROM administrators WHERE email = ?",
        [email]
      )
      user = administrators[0];
    }
    else if (role == 'therapists') {
      const [therapists] = await connection.execute(
        "SELECT * FROM therapists WHERE email = ?",
        [email]
      )
      user = therapists[0];
    }
    const hash = await bcrypt.hash(newPW, saltRounds);
    const passwordMatch = await bcrypt.compare(currentPW, user.password);
    if (passwordMatch) {
      if (!await bcrypt.compare(currentPW, newPW)) {
        const [result] = await connection.execute(
          `UPDATE ${role} SET password = ? WHERE email = ?`,
          [hash, email]
        );
        if (result.affectedRows === 1) {
          res.status(200).json({ message: "비밀번호 변경 완료" });
        } else {
          res.status(404).json({ error: "비밀번호 변경 실패" });
        }
      } else {
        res.status(404).json({ error: "새로운 비밀번호와 현재 비밀번호가 똑같습니다." });
      }
    } else {
      res.status(500).json({ error: "현재 비밀번호가 맞지 않습니다." });
    }

    connection.release();

  } catch (error) {
    console.error("에러", error);
    res.status(500).json({ error: "데이터 업데이트 중 오류가 발생했습니다." });
  }
}

async function patientE(req, res) {
  // 사용자 데이터 로드 로직 구현
  try {
    const { name, id, hospital, sex, therapists } = req.body;
    console.log(req.body);
    let p;

    const connection = await pool.getConnection();

    const [patient] = await connection.execute(
      "SELECT * FROM patients WHERE patientNo = ? AND name = ? AND hospital = ? AND sex = ? AND therapists = ?",
      [id, name, hospital, sex, therapists]
    )

    if (patient[0] != null) {
      p = patient[0];
      // 사용자 데이터를 클라이언트로 응답으로 보냅니다.
      res.status(200).json({
        patientNo: p.patientNo,
        hospitalName: p.hospital,
      });
    } else {
      // 사용자를 찾을 수 없을 경우 적절한 응답을 보냅니다.
      res.status(404).json({ error: "신규환자 입니다." });
    }

    connection.release();

  } catch (error) {
    console.error("에러", error);
    res.status(500).json({ error: "데이터 불러오기 실패" });
  }
}

module.exports = {
  signup,
  signin,
  loadUserData,
  updateData,
  updatePassword,
  patientE
};
