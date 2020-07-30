CREATE DATABASE ng_app_db;

USE ng_app_db;

CREATE TABLE citizen (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(180),
    country VARCHAR(180)
);