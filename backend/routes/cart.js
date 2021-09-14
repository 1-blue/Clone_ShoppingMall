const router = require("express").Router();
const { pool, insertCartSQL, getCartSQL, deleteCartSQL } = require("../database");

router.get("/", async (req, res) => {
  try {
    const [cart] = await pool.query(getCartSQL, [req.user._id]);
    return res.json({ result: true, message: `개인 장바구니 정보불러오기 성공`, cart });
  } catch (error) {
    console.error("GET /product/cart error >>", error);
  }
});

router.post("/", async (req, res) => {
  const { ProductId, count } = req.body;

  try {
    await pool.query(insertCartSQL, [req.user._id, ProductId, count]);
    return res.json({ result: true, message: `상품 ${count}개를 장바구니에 등록완료했습니다.` });
  } catch (error) {
    console.error("POST /product/cart error >>", error);
  }
});

router.delete("/:ProductId", async (req, res) => {
  const { ProductId } = req.params;

  try {
    await pool.query(deleteCartSQL, [req.user._id, ProductId]);
    return res.json({ result: true, message: "상품 1개를 장바구니에서 삭제했습니다.", ProductId: +ProductId });
  } catch (error) {
    console.error("DELETE /product/cart error >>", error);
  }
});

module.exports = router;
