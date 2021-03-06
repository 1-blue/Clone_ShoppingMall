const jwt = require("jsonwebtoken");
const { pool, getLoginUserAllData } = require("../database");

const getAccessToken = id => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
};

const getRefreshToken = id => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" });
};

// 로그인했다면, 유저정보 넣어주는 미들웨어
const userInfoMiddleware = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token) return next();

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (error, user) => {
    if (error) {
      console.error("인증토큰 유효성검사 error >> ", error);
      return res.sendStatus(400).json({ result: false, message: "인증토큰인증에 실패했습니다." });
    }

    const [[exUser]] = await pool.query(getLoginUserAllData, [user.id]);
    req.user = exUser;
    next();
  });
};

// 로그인상태인지 확인 ( access token의 유효성 검사 )
const isLoggedIn = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.error("인증토큰을 전달받지 못했습니다.");
    return res.sendStatus(400).json({ result: false, message: "인증토큰을 전달받지 못했습니다." });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (error, user) => {
    if (error) {
      console.error("인증토큰 유효성검사 error >> ", error);
      return res.sendStatus(400).json({ result: false, message: "인증토큰인증에 실패했습니다." });
    }

    const [[exUser]] = await pool.query(getLoginUserAllData, [user.id]);
    if (exUser) return next();
    else return next("로그아웃상태입니다");
  });
};

// 로그아웃상태인지 확인
const isLoggedOut = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    next();
  } else {
    next("로그인상태입니다.");
  }
};

module.exports = {
  getAccessToken,
  getRefreshToken,
  userInfoMiddleware,
  isLoggedIn,
  isLoggedOut,
};
