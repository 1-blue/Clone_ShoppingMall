/* eslint-disable prettier/prettier */
const mysql = require("mysql2");

const pool = mysql.createPool(require("./config")).promise();

const registerSQL = "INSERT INTO users(id, password, name, email, phone, address, gender, birth) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
const registerSQL2 = "INSERT INTO users(id, password, name, email, phone, address, birth) VALUES(?, ?, ?, ?, ?, ?, ?)";
const loginAuthSQL = "SELECT id, password FROM users WHERE id = ?";
const loginUserOfDataSQL = "SELECT _id, id, name FROM users";
const findLoginUserSQL = "SELECT * FROM users WHERE id = ?";

const getProductsWithImageSQL = "SELECT p._id, p.name, p.price, p.description, i.imagePath FROM products p inner join images i ON p._id = i.ProductId;";
const getProductWithImageSQL = "SELECT p._id, p.name, p.price, p.description, p.saleUnit, p.weight, p.shipping, p.origin, p.packaging, p.allergy, p.shelfLife, p.notification, i.imagePath FROM products p inner join images i ON p._id = i.ProductId WHERE p._id = ?;";

module.exports = {
  pool,
  registerSQL,
  registerSQL2,
  loginUserOfDataSQL,
  loginAuthSQL,
  findLoginUserSQL,
  getProductsWithImageSQL,
  getProductWithImageSQL
};
