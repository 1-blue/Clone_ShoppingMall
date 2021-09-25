CREATE TABLE images (
	_id int not null auto_increment primary key COMMENT '이미지 식별자',
    ProductId int null COMMENT '상품의 식별자',
    `type` varchar(10) not null COMMENT '이미지 종류',
    imagePath varchar(30) not null COMMENT '상품이미지가 저장된 경로',
    CONSTRAINT fk_products_images FOREIGN KEY (ProductId) REFERENCES products(_id) ON DELETE CASCADE
);

use marketKurly;
show tables;
desc images;
drop table images;
SELECT * FROM images;