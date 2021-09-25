use marketKurly;
show tables;

/* 모든 상품과 참조된 이미지 찾기 */
SELECT p._id, p.name, p.price, p.description, i.imagePath FROM products p inner join images i ON p._id = i.ProductId;

/* 특정 상품과 정보들 찾기 ( i._id와 i.ProductId만 빼고... ) */
SELECT p._id, p.name, p.price, p.description, p.saleUnit, p.weight, p.shipping, p.origin, p.packaging, p.allergy, p.shelfLife, p.notification, i.imagePath FROM products p inner join images i ON p._id = i.ProductId WHERE p._id = 1;

/* 내 장바구니 상품찾기 */
SELECT 
	p._id, p.name, p.price, c.count, i.imagePath
	FROM carts c 
    INNER JOIN products p 
    ON c.ProductId = p._id 
    INNER JOIN images i
    ON p._id = i.ProductId
    WHERE c.UserId = 1;
    
/* 장바구니 상품하나삭제 */
DELETE FROM carts WHERE UserId = 1 AND ProductId = 1;

select * from carts;

/* 장바구니 상품개수 수정 */
UPDATE carts SET count = 2 WHERE ProductId = 1;

select * from products;

select * from images;

SELECT * FROM images where 'type' = 'main';