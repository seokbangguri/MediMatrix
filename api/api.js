require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise"); // 수정: mysql2/promise 모듈 사용
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const saltRounds = 10; // 솔트(Salt) 라운드 수

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

app.post("/signup", async (req, res) => {
	console.log(req.body);
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
    console.error("회원가입 에러:", error);
    res.status(500).json({ error: "회원가입 중 오류가 발생했습니다." });
  }
});
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
    console.error("로그인 에러:", error);
    res.status(500).json({ error: "로그인 중 오류가 발생했습니다." });
  }
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});

