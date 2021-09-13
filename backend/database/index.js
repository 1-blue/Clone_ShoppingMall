/* eslint-disable prettier/prettier */
const mysql = require("mysql2");

const pool = mysql.createPool(require("./config")).promise();

const registerSQL = "INSERT INTO users(id, password, name, email, phone, address, gender, birth) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
const registerWithGenderSQL = "INSERT INTO users(id, password, name, email, phone, address, birth) VALUES(?, ?, ?, ?, ?, ?, ?)";
const getLoginUser = "SELECT id, password FROM users WHERE id = ?";
const getLoginUserWithData = "SELECT _id, id, name FROM users";
const getLoginUserAllData = "SELECT * FROM users WHERE id = ?";

const getProductsWithImageSQL = "SELECT p._id, p.name, p.price, p.description, i.imagePath FROM products p inner join images i ON p._id = i.ProductId;";
const getProductWithImageSQL = "SELECT p._id, p.name, p.price, p.description, p.saleUnit, p.weight, p.shipping, p.origin, p.packaging, p.allergy, p.shelfLife, p.notification, i.imagePath FROM products p inner join images i ON p._id = i.ProductId WHERE p._id = ?;";
const insertCartSQL = "INSERT INTO carts(UserId, ProductId, count) VALUES(?, ?, ?)";
const getCartSQL = "SELECT p.name, p.price, c.count FROM carts c INNER JOIN products p ON c.ProductId = p._id WHERE c.UserId = ?;";

module.exports = {
  pool,
  registerSQL,
  registerWithGenderSQL,
  getLoginUserWithData,
  getLoginUser,
  getLoginUserAllData,
  getProductsWithImageSQL,
  getProductWithImageSQL,
  insertCartSQL,
  getCartSQL
};
