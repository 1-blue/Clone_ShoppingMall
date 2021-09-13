const router = require("express").Router();
const { pool, getProductsWithImageSQL } = require("../database");

router.get("/", async (req, res) => {
  const { category } = req.query;
  let products = null;

  try {
    switch (category) {
      case "new":
        [products] = await pool.query(getProductsWithImageSQL);
        return res.json({ result: true, message: "신상품을 정상적으로 불러왔습니다.", products });
      case "best":
        [products] = await pool.query(getProductsWithImageSQL);
        return res.json({ result: true, message: "베스트상품을 정상적으로 불러왔습니다.", products });

      default:
        return res.status(500).json({ result: false, message: "모든 상품을 불러오다가 서버측 에러 발생", products });
    }
  } catch (error) {
    console.error("GET /products error >> ", error);
  }
});

module.exports = router;
