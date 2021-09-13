CREATE TABLE carts (
	_id int not null auto_increment primary key COMMENT '장바구니 식별자',
    UserId int not null COMMENT '참조할 유저의 식별자',
    ProductId int not null COMMENT '참조할 상품의 식별자',
    count int not null COMMENT '상품개수',
    CONSTRAINT fk_users_carts FOREIGN KEY(UserId) REFERENCES users(_id) ON DELETE CASCADE,
    CONSTRAINT fk_products_carts FOREIGN KEY(ProductId) REFERENCES products(_id) ON DELETE CASCADE
);

use marketKurly;
show tables;
desc carts;
drop table carts;
SELECT * FROM carts;