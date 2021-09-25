const router = require("express").Router();
const {
  pool,
  getAllProductsWithImageSQL,
  getNewProductsWithImageSQL,
  getBestProductsWithImageSQL,
  getMainImagesSQL,
} = require("../database");

// 메인이미지의 이미지슬라이더에 사용할 이미지 받기
router.get("/mainImages", async (req, res) => {
  try {
    [mainImages] = await pool.query(getMainImagesSQL);
    res.json({ result: true, mainImages });
  } catch (error) {
    console.error("GET products/mainImages error >> ", error);
  }
});

// 라우터 분리할지 고민중
router.get("/", async (req, res) => {
  const { category } = req.query;
  let products = null;

  try {
    switch (category) {
      case "all":
        [products] = await pool.query(getAllProductsWithImageSQL);
        return res.json({ result: true, message: "모든 상품을 정상적으로 불러왔습니다.", products });
      case "new":
        [products] = await pool.query(getNewProductsWithImageSQL);
        return res.json({ result: true, message: "신상품을 정상적으로 불러왔습니다.", products });
      case "best":
        [products] = await pool.query(getBestProductsWithImageSQL);
        return res.json({ result: true, message: "베스트상품을 정상적으로 불러왔습니다.", products });

      default:
        return res.status(500).json({ result: false, message: "모든 상품을 불러오다가 서버측 에러 발생", products });
    }
  } catch (error) {
    console.error("GET /products error >> ", error);
  }
});

module.exports = router;
