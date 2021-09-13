CREATE TABLE products (
	_id int not null auto_increment primary key COMMENT '상품식별자',
    name varchar(40) not null COMMENT '상품이름',
    price int not null COMMENT '상품가격',
    description varchar(40) not null COMMENT '상품설명',
    saleUnit varchar(10) not null COMMENT '판매단위',
    weight varchar(10) null COMMENT '중량/용량',
    shipping varchar(10) not null COMMENT '배송구분',
    origin varchar(10) null COMMENT '원산지',
    packaging varchar(10) not null COMMENT '포장타입',
    allergy varchar(50) null COMMENT '알레르기정보',
    shelfLife varchar(10) null COMMENT '유통기한',
    notification varchar(30) null COMMENT '안내사항'
);

use marketKurly;
show tables;
desc products;
drop table products;
SELECT * FROM products;