/* eslint-disable prettier/prettier */
const mysql = require("mysql2");

const pool = mysql.createPool(require("./config")).promise();

const registerSQL = "INSERT INTO users(id, password, name, email, phone, address, gender, birth) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
const registerSQL2 = "INSERT INTO users(id, password, name, email, phone, address, birth) VALUES(?, ?, ?, ?, ?, ?, ?)";
const loginAuthSQL = "SELECT id, password FROM users WHERE id = ?";
const loginUserOfDataSQL = "SELECT _id, id, name FROM users";
const findLoginUserSQL = "SELECT * FROM users WHERE id = ?";

module.exports = {
  pool,
  registerSQL,
  registerSQL2,
  loginUserOfDataSQL,
  loginAuthSQL,
  findLoginUserSQL
};
