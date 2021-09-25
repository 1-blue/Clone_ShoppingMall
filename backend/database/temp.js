// 아직 상품추가하는 관리자페이지가 없어서 수동으로 넣는 곳

/* eslint-disable prettier/prettier */
const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "market_user",
  password: "nodejs",
  database: "marketKurly",
  port: 3306,
}).promise();

const addProductSQL = `
INSERT INTO 
products(name, price, description, saleUnit, weight, shipping, origin, packaging, allergy, shelfLife, notification) 
VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`
const addProductImageSQL = `
INSERT INTO 
images(ProductId, imagePath) 
VALUES(?, ?)
`

async function addProduct() {
  const name = "[MF365] 김구원선생 국내산 무농약 콩나물 300g";
  const price = 900;
  const description = "믿고 먹을 수 있는 상품을 합리적인 가격에, KF365";
  const saleUnit = "1봉";
  const weight = "300g";
  const shipping = "샛별배송/택배배송";
  const origin = "국내산";
  const packaging = "냉장/종이포장";
  const allergy = "";
  const shelfLife = "3일이상";
  const notification = "아무튼 콩나물임";

  await pool.query(addProductSQL, [name, price, description, saleUnit, weight, shipping, origin, packaging, allergy, shelfLife, notification]);
}

async function addProductImage() {
  const ProductId = 4;
  const imagePath = "/images/products/4.jpg";

  await pool.query(addProductImageSQL, [ProductId, imagePath]);
}
