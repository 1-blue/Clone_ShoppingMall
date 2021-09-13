const router = require("express").Router();
const { pool, getProductWithImageSQL, insertCartSQL, getCartSQL } = require("../database");

// 장바구니
router.post("/cart", async (req, res) => {
  const { ProductId, count } = req.body;

  try {
    await pool.query(insertCartSQL, [req.user._id, ProductId, count]);
    return res.json({ result: true, message: `상품 ${count}개를 장바구니에 등록완료했습니다.` });
  } catch (error) {
    console.error("POST /product/cart error >>", error);
  }
});
router.get("/cart", async (req, res) => {
  try {
    const [cart] = await pool.query(getCartSQL, [req.user._id]);
    return res.json({ result: true, message: `개인 장바구니 정보불러오기 성공`, cart });
  } catch (error) {
    console.error("GET /product/cart error >>", error);
  }
});

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
