require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { userInfoMiddleware } = require("./auth");

const app = express();

// 상수값지정
app.set("PORT", process.env.PORT);

// 미들웨어
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(userInfoMiddleware);

// 라우터
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));
app.use("/products", require("./routes/products"));
app.use("/product", require("./routes/product"));
app.use("/cart", require("./routes/cart"));

// 에러처리 미들웨어
app.use((error, req, res, next) => {
  console.error("에러처리미들웨어 >> ", error);
  res.status(500).json({ result: false, message: "서버측 에러 발생" });
});

app.listen(app.get("PORT"), () => {
  console.log(`${app.get("PORT")}번 서버 대기중`);
});
