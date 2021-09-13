use marketKurly;
show tables;

/* 모든 상품과 참조된 이미지 찾기 */
SELECT p._id, p.name, p.price, p.description, i.imagePath FROM products p inner join images i ON p._id = i.ProductId;

/* 특정 상품과 정보들 찾기 ( i._id와 i.ProductId만 빼고... ) */
SELECT p._id, p.name, p.price, p.description, p.saleUnit, p.weight, p.shipping, p.origin, p.packaging, p.allergy, p.shelfLife, p.notification, i.imagePath FROM products p inner join images i ON p._id = i.ProductId WHERE p._id = 1;