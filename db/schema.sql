DROP DATABASE onlinestore_db;

CREATE DATABASE onlinestore_db;

USE onlinestore_db;

CREATE TABLE users (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userid VARCHAR(50) NOT NULL,
    userpassword VARCHAR(100) NOT NULL,
    userfname VARCHAR(100) NOT NULL,
    userlname VARCHAR(100) NOT NULL,
    userrole VARCHAR(20) NOT NULL,
    useremail VARCHAR(50) NOT NULL,
    userphone VARCHAR(50),
    useraddress VARCHAR(300),
    usercreationdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    usermodificationdate DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    categoryid VARCHAR(50) NOT NULL,
    productname VARCHAR(100) NOT NULL,
    productdescription VARCHAR(1000) NOT NULL,
    productimage VARCHAR(1000) NOT NULL,
    productprice VARCHAR(50) NOT NULL,
    productcreationdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    productmodificationdate DATETIME ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE categories (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    categoryname VARCHAR(100) NOT NULL,
    categorycreationdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    categorymodificationdate DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE orders (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userid VARCHAR(50) NOT NULL,
    productid VARCHAR(50) NOT NULL,
    productquantity VARCHAR(50) NOT NULL,
    ordercreationdate DATETIME DEFAULT CURRENT_TIMESTAMP,
    ordermodificationdate DATETIME ON UPDATE CURRENT_TIMESTAMP
);

