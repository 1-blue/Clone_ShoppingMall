# 마켓컬리 클론 사이트 제작
+ `.env`같은 류의 파일은 원래는 올리면 안 되지만 별일 없을 것 같아서 그냥 올림

## 1. 구현할것
1. 페이지
  - 관리자페이지 ( 물건에 대한 정보 및 가격등록, CRUD기능, 조회수 )
	- ~~회원가입페이지~~
  - ~~로그인페이지~~
  - 메인페이지
  - ~~물건 상세페이지~~
  - 장바구니 ( 만드는중 )
  
2. 기능
  - ~~carousel~~
  - ~~회원가입, 로그인, 로그아웃~~
  - 최근본상품 ( 사이트 우측에 고정으로 )
  - 물건검색 ( 가능하면, 자동완성기능추가 )
  - ~~장바구니 담기기능 ( 가격미리보기 )~~
  - 후기댓글 ( 구입한사람만 )
  - 문의댓글 ( + 비공개 )
	- 결제기능 ( 카카오페이, 카드결제 등등 )
  - 할인쿠폰 ( 시간남으면 )
  - 무한스크롤링

## 참고
+ 모든 페이지 반응형아님, 폰트크기제외 정적인 `px`로 단위지정함
+ `.env`파일 별로 숨길거 없어가지고 그냥 같이 올림

## 해야할것
1. carousel 전체적으로 수정 ( 화살표기능, 포지션, 반응형 )
2. RegiserForm에 약관동의기능 추가하기
3. RegisterForm에 코드량이 너무 많은데 적당한 분리방법 찾기
4. SQL코드를 깔끔하게 정리해두는 방법이 필요함
5. HTTP - DELETE로 배열을 전달하는 좋은 방법을 찾아야함 ( 장바구니 선택한거 삭제할 때  )

## 오류
1. carousel에서 이미지크기를 정적으로 지정해서 반응형적용이 안됨...
2. 장바구니 추가시 다른 상품이 추가되는 경우가 생김 ( redux-devtools확인결과 분명 출력데이터까지는 정상인데 서버로 보내는 상품아이디값이 달라짐... 정확한 원인을 모르겠어서 임시로 다른 처리함 )
3. CHANGE_CART_SUCCESS에서 불변성 분명히 안지키는데 오류안남

## 사용한것 ( 덜익숙하거나, 중요한거 위주로 )
1. react
2. redux
3. redux-saga
4. styled-components
5. jwt