DROP DATABASE IF EXISTS quoteGoat_db;

CREATE DATABASE quoteGoat_db;

USE quoteGoat_db;

CREATE TABLE users (
    user_id INTEGER AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    full_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE quotes (
    quote_id INTEGER AUTO_INCREMENT NOT NULL,
    category_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    quote VARCHAR(1000) NOT NULL,
    date_added DATETIME NOT NULL,
    PRIMARY KEY (quote_id)
    FOREIGN KEY (category_id FROM categories)
);

 CREATE TABLE categories (
    category_id INTEGER AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (category_id)
 );

 CREATE TABLE votes (
    vote_id INTEGER AUTO_INCREMENT NOT NULL,
    quote_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    number_of_votes INTEGER NOT NULL,
    PRIMARY KEY (vote_id)
);
