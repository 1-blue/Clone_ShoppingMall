CREATE TABLE users(
	_id int not null auto_increment primary key,
    id varchar(20) null null unique,
    password varchar(200) not null,
    name varchar(20) not null,
    email varchar(40) not null unique,
    phone varchar(11) not null unique,
    address varchar(30) not null,
    gender tinyint null,
    birth varchar(8) null
);

use marketKurly;
show tables;
desc users;
drop table users;
SELECT * FROM users;