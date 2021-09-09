require("dotenv").config();
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("user >> ", req.user);

  res.json({ result: true });
});

module.exports = router;
