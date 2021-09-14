const router = require("express").Router();
const { pool, getProductWithImageSQL } = require("../database");

router.get("/:ProductId", async (req, res) => {
  const { ProductId } = req.params;

  try {
    const [[product]] = await pool.query(getProductWithImageSQL, [ProductId]);
    res.json({ result: true, message: `${ProductId}번 상품을 정상적으로 불러왔습니다.`, product });
  } catch (error) {
    console.error("GET /product error >> ", error);
  }
});

module.exports = router;
