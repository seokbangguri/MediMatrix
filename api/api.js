require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise"); // 수정: mysql2/promise 모듈 사용
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const saltRounds = 10; // 솔트(Salt) 라운드 수

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

//회원가입
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, hospitalName, phoneNumber, role } = req.body;

    // 비밀번호 해싱 비동기 처리
    const hash = await bcrypt.hash(password, saltRounds);

    // MySQL 데이터베이스 연결
    const connection = await mysql.createConnection(dbConfig);

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
        `INSERT INTO ${
          role === "administrator" ? "administrators (name, email, password, hospital, hp) VALUES (?, ?, ?, ?, ?)" : "therapists (name, email, password, hospital, hp) VALUES (?, ?, ?, ?, ?)"
        }`,
        [name, email, hash, hospitalName, phoneNumber]
      );

      connection.end();

      // 회원가입 성공
      res.status(201).json({ message: "회원가입 성공" });
    }
  } catch (error) {
    res.status(500).json({ error: "회원가입 중 오류가 발생했습니다." });
  }
});

//로그인
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // MySQL 데이터베이스 연결
    const connection = await mysql.createConnection(dbConfig);

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

    connection.end();
  } catch (error) {
    res.status(500).json({ error: "로그인 중 오류가 발생했습니다." });
  }
});

//사용자 데이터 불러오기
app.post("/mypage", async (req, res) => {
  try {
    const { email, role } = req.body;
    console.log(email);
    console.log(role);
    let user = null;

    const connection = await mysql.createConnection(dbConfig);
    if (role == 'administrator') {
      const [administrators] = await connection.execute(
        "SELECT * FROM administrators WHERE email = ?",
        [email]
      )
      user = administrators[0];
    }
    else if (role == 'therapist') {
      const [therapists] = await connection.execute(
        "SELECT * FROM therapists WHERE email = ?",
        [email]
      )
      user = therapists[0];
    }

    if (user != null) {
      // 사용자 데이터를 클라이언트로 응답으로 보냅니다.
      res.status(200).json({ message:'데이터 조회 성공', user: user});
    } else {
      // 사용자를 찾을 수 없을 경우 적절한 응답을 보냅니다.
      res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }
    connection.end();
  } catch (error) {
    res.status(500).json({ error: "데이터 불러오기 실패" });
  }
});

//정보 수정
app.post("/updatedata", async (req, res) => {
  try {
    const { name, email, phoneNumber, hospitalName } = req.body;

    // MySQL 데이터베이스 연결
    const connection = await mysql.createConnection(dbConfig);
    const [administrators] = await connection.execute(
      "SELECT * FROM administrators WHERE email = ?",
      [email]
    )
    const [therapists] = await connection.execute(
      "SELECT * FROM therapists WHERE email = ?",
      [email]
    )
  
    let user = null;
  
    if (therapists.length > 0) {
      // therapists 테이블에서 사용자 발견
      user = "therapists";
    } else if (administrators.length > 0) {
      // administrators 테이블에서 사용자 발견
      user = "administrators";
    }

    // 사용자 데이터 업데이트
    const [result] = await connection.execute(
      `UPDATE ${user} SET name = ?, email = ?, hp = ?, hospital = ? WHERE email = ?`,
      [ name, email, phoneNumber, hospitalName, email]
    );

    connection.end();

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
});
//수정중
app.post("/updatepw", async (req, res) => {
  try {
    const { currentPW, newPW, email } = req.body;

    // MySQL 데이터베이스 연결
    const connection = await mysql.createConnection(dbConfig);
    const [administrators] = await connection.execute(
      "SELECT * FROM administrators WHERE email = ?",
      [email]
    )
    const [therapists] = await connection.execute(
      "SELECT * FROM therapists WHERE email = ?",
      [email]
    )
  
    let user = null;
  
    if (therapists.length > 0) {
      // therapists 테이블에서 사용자 발견
      user = "therapists";
      const passwordMatch = await bcrypt.compare(currentPW, therapists[0].password);
      if( passwordMatch ) {// 사용자 데이터 업데이트
        const [result] = await connection.execute(
          `UPDATE ${user} SET password = ? WHERE email = ?`,
          [ newPW, email]
        );
      }
    } else if (administrators.length > 0) {
      // administrators 테이블에서 사용자 발견
      user = "administrators";
      const passwordMatch = await bcrypt.compare(currentPW, therapists[0].password);
      if( passwordMatch ) {// 사용자 데이터 업데이트
        const [result] = await connection.execute(
          `UPDATE ${user} SET password = ? WHERE email = ?`,
          [ newPW, email]
        );
      }
    }

    connection.end();

    if (result.affectedRows === 1) {
      // 업데이트가 성공한 경우
      res.status(200).json({ message: "사용자 비밀번호 변경 성공" });
    } else {
      // 업데이트가 실패한 경우 (해당 이메일을 가진 사용자를 찾을 수 없음)
      res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
    }
  } catch (error) {
    console.error("사용자 데이터 업데이트 에러:", error);
    res.status(500).json({ error: "데이터 업데이트 중 오류가 발생했습니다." });
  }
});


app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});

