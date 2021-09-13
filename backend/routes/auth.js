require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { pool, registerSQL, registerWithGenderSQL, getLoginUser, getLoginUserWithData } = require("../database");
const { getAccessToken, getRefreshToken, isLoggedIn, isLoggedOut } = require("../auth");

// 회원가입
router.post("/register", isLoggedOut, async (req, res) => {
  const { id, password, name, email, phone, address, gender, birth } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 6);

    // 성별선택에 상관없음인지 아닌지
    if (gender) {
      await pool.query(registerSQL, [id, hashPassword, name, email, phone, address, gender, birth]);
    } else {
      await pool.query(registerWithGenderSQL, [id, hashPassword, name, email, phone, address, birth]);
    }

    res.json({ result: true, message: `${name}님 회원가입에 성공하셨습니다.` });
  } catch (error) {
    console.error("POST /auth/register error >>", error);
  }
});

// 로그인
router.post("/login", isLoggedOut, async (req, res) => {
  let { id, password } = req.body;

  try {
    // 아이디 존재 여부 찾고
    const [[exUser]] = await pool.query(getLoginUser, [id]);
    if (!exUser) return res.status(400).json({ result: false, message: "일치하는 유저가 없습니다." });

    // 비밀번호 일치 여부 판단하고
    const result = await bcrypt.compare(password, exUser.password);
    if (result === false) return res.status(400).json({ result: false, message: "비밀번호가 불일치합니다." });

    // 인증토큰, 리프레쉬토큰 생성하고
    const accessToken = getAccessToken(id);
    const refreshToken = getRefreshToken(id);
    const [[me]] = await pool.query(getLoginUserWithData);

    // 인증절차완료후 토큰전달
    res.json({ result: true, message: "로그인에 성공하셨습니다.", me, accessToken, refreshToken });
  } catch (error) {
    console.error("POST /auth/login error >> ", error);
  }
});

// 로그아웃
router.delete("/logout", isLoggedIn, async (req, res) => {
  const me = null;
  const accessToken = null;
  const refreshToken = null;

  res.json({ result: true, message: "로그아웃을 완료했습니다.", me, accessToken, refreshToken });
});

module.exports = router;
