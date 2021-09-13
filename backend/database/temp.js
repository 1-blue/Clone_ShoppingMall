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

const tempDetailProduct = [
  {
    _id: 2,
    imgPath: "/images/products/2.jpg",
  },
  {
    _id: 3,
    imgPath: "/images/products/3.jpg",
  },
  {
    _id: 4,
    imgPath: "/images/products/4.jpg",
  },
];

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
  const name = "[비움반찬]김치볶음";
  const price = 3900;
  const description = "할라피뇨의 청량하고 스파이시한 킥";
  const saleUnit = "1팩";
  const weight = "150g";
  const shipping = "샛별배송/택배배송";
  const origin = "";
  const packaging = "냉장/종이포장";
  const allergy = "";
  const shelfLife = "";
  const notification = "아무튼 김치";

  await pool.query(addProductSQL, [name, price, description, saleUnit, weight, shipping, origin, packaging, allergy, shelfLife, notification]);
}

async function addProductImage() {
  const ProductId = 4;
  const imagePath = "/images/products/4.jpg";

  await pool.query(addProductImageSQL, [ProductId, imagePath]);
}
