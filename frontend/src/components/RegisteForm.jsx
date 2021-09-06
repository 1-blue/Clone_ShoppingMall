import React, { useMemo, useState, useCallback } from "react";
import styled from "styled-components";

// 사용자 정의 hooks
import useInput from "../hooks/useInput";

const PStyle = styled.p`
  width: 640px;
  padding-bottom: 10px;
  margin: auto;
  color: #666;
  font-size: 0.75rem;
  text-align: right;
`;
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 640px;
  margin: auto;
  border-top: 2px solid #333;
`;
const LabelStyle = styled.label`
  display: inline-block;
  width: 159px;
  height: 74px;
  padding: 20px 0 0 20px;
`;
const InputTextContainerStyle = styled.div`
  display: inline-flex;
  flex-direction: column;
`;
const InputTextStyle = styled.input`
  width: 332px;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  background: #fff;
  font-size: 1rem;
  line-height: 20px;
  outline: none;
  &:focus {
    outline: 1px solid black;
  }
  &::placeholder {
    color: #ccc;
    font-size: 0.85rem;
  }
`;
const InputRadioStyle = styled.input`
  position: relative;
  top: 6px;
  width: 24px;
  height: 24px;
`;
const BirthdayBoxStyle = styled.div`
  display: inline-block;
  width: 332px;
  height: 44px;
  padding-left: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  vertical-align: middle;
`;
const BirthdayInputStyle = styled.input`
  float: left;
  width: 84px;
  height: 40px;
  border: 0;
  text-align: center;
`;
const BirthdayBarStyle = styled.span`
  &::after {
    content: "/";
    float: left;
    width: 22px;
    height: 100%;
    font-size: 14px;
    color: #ccc;
    line-height: 42px;
    text-align: center;
  }
`;
const BtnStyle = styled.button`
  display: inline-block;
  width: 120px;
  height: 44px;
  margin-left: 10px;
  border-radius: 3px;
  border: 1px solid #5f0080;
  color: #5f0080;
  background-color: #fff;
`;
const SubmitBtnStyle = styled.button`
  width: 240px;
  height: 56px;
  margin: 40px auto;
  color: #fff;
  background-color: #5f0080;
  border: 1px solid #5f0081;
  border-radius: 3px;
  font-size: 1rem;
`;

const RegisterForm = () => {
  const spanStyle = useMemo(() => ({ color: "#ee6a7b" }));
  const redioLableStyle = useMemo(() => ({ padding: "10px 52px 10px 0px" }));
  const successText = useMemo(() => ({ color: "#0f851a", fontSize: "0.75rem" }));
  const warningText = useMemo(() => ({ color: "#b3130b", fontSize: "0.75rem" }));

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, onChangeName] = useInput("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, onChangeAddress] = useInput("");
  const [gender, onChangeGender] = useInput("");
  const [year, onChangeYear] = useInput("");
  const [month, onChangeMonth] = useInput("");
  const [day, onChangeDay] = useInput("");

  // 아이디 유효성검사 변수
  const [validateId, setValidateId] = useState(false);
  const [validateIdOverlap, setValidateIdOverlap] = useState(true); // 이건 나중에 서버랑 연동후에 처리
  // 비밀번호 유효성검사 변수
  const [validatePasswordLength, setValidatePasswordLength] = useState(false);
  const [validatePasswordMix, setValidatePasswordMix] = useState(false);
  const [validatePasswordOverlap, setValidatePasswordOverlap] = useState(false);
  // 비밀번호체크 유효성검사 변수
  const [validatePasswordCheck, setValidatePasswordCheck] = useState(false);
  // 이메일 유효성검사 변수
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateEmailOverlap, setValidateEmailOverlap] = useState(true); // 이건 나중에 서버랑 연동후에 처리
  // 휴대폰 유효성검사 변수
  const [validatePhone, setValidatePhone] = useState(false);

  // 아이디 변경 및 유효성검사
  const onChangeId = useCallback(e => {
    setId(e.target.value);
    // 아이디 유효성검사
    setValidateId(/^[0-9a-zA-Z]{6,}$/.test(e.target.value));
  }, []);

  // 비밀번호 변경 및 유효성검사
  const onChangePassword = useCallback(({ target: { value } }) => {
    setPassword(value);

    // 비밀번호 유효성검사
    const validate = [];
    validate.push(/.{10,}/.test(value)); // 10자리 이상 검사
    validate.push(/^(?=.*\d)(?=.*[a-zA-Z]).*/.test(value)); // 1. 숫자 + 영문
    validate.push(/^(?=.*\d)(?=.*[^a-zA-Z\d\s]).*/.test(value)); // 2. 숫자 + 특수문자 ( 공백은 특수문자에서 제외 )
    validate.push(/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d\s]).*/.test(value)); // 3. 영문 + 특수문자 ( 공백은 특수문자에서 제외 )
    validate.push(!/(.)\1\1/.test(value));

    setValidatePasswordLength(validate[0]);
    setValidatePasswordMix(validate[1] || validate[2] || validate[3]);
    setValidatePasswordOverlap(validate[4]);
  }, []);

  // 비밀번호체크 변경 및 유효성검사
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setValidatePasswordCheck(e.target.value === password);
    },
    [password],
  );

  // 이메일 변경 및 유효성검사
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
    setValidateEmail(/.*@.*\..*/.test(e.target.value));
  });

  // 휴대폰 번경 및 유효성검사
  const onChangePhone = useCallback(e => {
    setPhone(e.target.value);

    setValidatePhone(/\d{11}/.test(e.target.value));
  }, []);

  // 회원가입
  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      if (!validateId) return alert("아이디가 짧거나 조합이 틀렸습니다.");
      if (!validateIdOverlap) return alert("아이디 중복된 아이디가 존재합니다.");
      if (!validatePasswordLength) return alert("비밀번호의 길이가 짧습니다.");
      if (!validatePasswordMix) return alert("비밀번호의 조합이 틀렸습니다.");
      if (!validatePasswordOverlap) return alert("비밀번호에 같은 문자를 연속 3개이상 사용하셨습니다.");
      if (!validatePasswordCheck) return alert("비밀번호가 불일치합니다.");
      if (!validateEmailOverlap) return alert("이미 중복된 이메일이 존재합니다.");
      if (!validatePhone) return alert("휴대폰번호의 형식이 불일치합니다.");

      // 서버로 전달할 데이터들
      // console.log({ id, password, passwordCheck, name, email, phone, address, gender, year, month, day });
    },
    [
      validateId,
      validateIdOverlap,
      validatePasswordLength,
      validatePasswordMix,
      validatePasswordOverlap,
      validatePasswordCheck,
      validateEmailOverlap,
      validatePhone,
    ],
  );

  return (
    <>
      <PStyle>
        <span style={spanStyle}>*</span>
        필수입력사항
      </PStyle>
      <FormStyle onSubmit={onSubmit}>
        {/* 아이디 */}
        <div>
          <LabelStyle htmlFor="id">
            아이디
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextContainerStyle>
            <InputTextStyle
              type="text"
              id="id"
              value={id}
              placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
              onChange={onChangeId}
            />
            <span style={validateId ? successText : warningText}>
              {validateId ? "✓" : "✕"} 6자 이상의 영문 혹은 영문과 숫자를 조합 ( 한글X )
            </span>
            <span style={validateIdOverlap ? successText : warningText}>
              {validateIdOverlap ? "✓" : "✕"} 아이디 중복확인
            </span>
          </InputTextContainerStyle>
          <BtnStyle>중복확인</BtnStyle>
        </div>

        {/* 비밀번호 */}
        <div>
          <LabelStyle htmlFor="password">
            비밀번호
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextContainerStyle>
            <InputTextStyle
              type="password"
              id="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangePassword}
            />
            <span style={validatePasswordLength ? successText : warningText}>
              {validatePasswordLength ? "✓" : "✕"} 10자 이상 입력
            </span>
            <span style={validatePasswordMix ? successText : warningText}>
              {validatePasswordMix ? "✓" : "✕"} 영문/숫자/특수문자(공백제외)만 허용하며, 2개 이상 조합
            </span>
            <span style={validatePasswordOverlap ? successText : warningText}>
              {validatePasswordOverlap ? "✓" : "✕"} 동일한 숫자 3개 이상 연속 사용 불가
            </span>
          </InputTextContainerStyle>
        </div>

        {/* 비밀번호 확인 */}
        <div>
          <LabelStyle htmlFor="passwordCheck">
            비밀번호확인
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextContainerStyle>
            <InputTextStyle
              type="password"
              id="passwordCheck"
              value={passwordCheck}
              placeholder="비밀번호를 한번 더 입력해주세요"
              onChange={onChangePasswordCheck}
            />
            <span style={validatePasswordCheck ? successText : warningText}>
              {validatePasswordCheck ? "✓" : "✕"} 동일한 비밀번호를 입력해주세요
            </span>
          </InputTextContainerStyle>
        </div>

        {/* 이름 */}
        <div>
          <LabelStyle htmlFor="name">
            이름
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextStyle
            type="text"
            id="name"
            value={name}
            placeholder="이름을 입력해주세요"
            onChange={onChangeName}
          />
        </div>

        {/* 이메일 */}
        <div>
          <LabelStyle htmlFor="email">
            이메일
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextContainerStyle>
            <InputTextStyle
              type="text"
              id="email"
              value={email}
              placeholder="예) market@naver.com"
              onChange={onChangeEmail}
            />
            <span style={validateEmail ? successText : warningText}>
              {validateEmail ? "✓" : "✕"} 이메일 형식에 맞게 입력해주세요
            </span>
          </InputTextContainerStyle>
          <BtnStyle>중복확인</BtnStyle>
        </div>

        {/* 휴대폰 */}
        <div>
          <LabelStyle htmlFor="phone">
            휴대폰
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextContainerStyle>
            <InputTextStyle
              type="text"
              id="phone"
              value={phone}
              placeholder="숫자만 입력해주세요"
              onChange={onChangePhone}
              maxLength="11"
            />
            <span style={validatePhone ? successText : warningText}>
              {validatePhone ? "✓" : "✕"} 숫자로 11자리 입력해주세요
            </span>
          </InputTextContainerStyle>
        </div>

        {/* 주소 */}
        <div>
          <LabelStyle htmlFor="address">
            주소
            <span style={spanStyle}>*</span>
          </LabelStyle>
          <InputTextStyle
            type="text"
            id="address"
            value={address}
            placeholder="주소를 입력해주세요"
            onChange={onChangeAddress}
          />
        </div>

        {/* 성별 */}
        <div>
          <LabelStyle htmlFor="gender">성별</LabelStyle>
          <InputRadioStyle type="radio" id="male" name="gender" value="male" onChange={onChangeGender} />
          <label htmlFor="male" style={redioLableStyle}>
            남자
          </label>
          <InputRadioStyle type="radio" id="female" name="gender" value="female" onChange={onChangeGender} />
          <label htmlFor="female" style={redioLableStyle}>
            여자
          </label>
          <InputRadioStyle type="radio" id="none" name="gender" value="none" onChange={onChangeGender} checked="true" />
          <label htmlFor="none" style={redioLableStyle}>
            상관없음
          </label>
        </div>

        {/* 생년월일 */}
        <div>
          <LabelStyle htmlFor="birthday">생년월일</LabelStyle>
          <BirthdayBoxStyle>
            <BirthdayInputStyle
              type="text"
              id="year"
              value={year}
              placeholder="YYYY"
              maxLength="4"
              onChange={onChangeYear}
            />
            <BirthdayBarStyle />
            <BirthdayInputStyle
              type="text"
              id="month"
              value={month}
              placeholder="MM"
              maxLength="2"
              onChange={onChangeMonth}
            />
            <BirthdayBarStyle />
            <BirthdayInputStyle
              type="text"
              id="day"
              value={day}
              placeholder="DD"
              maxLength="2"
              onChange={onChangeDay}
            />
          </BirthdayBoxStyle>
        </div>

        {/* 약관동의 */}

        {/* 가입버튼 */}
        <SubmitBtnStyle type="submit">가입하기</SubmitBtnStyle>
      </FormStyle>
    </>
  );
};

export default RegisterForm;
