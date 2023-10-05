require('dotenv').config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 30, // 최대 연결 수
  queueLimit: 0 // 대기열에 무제한 연결 요청 허용
});

module.exports = pool;
