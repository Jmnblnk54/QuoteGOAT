DROP DATABASE IF EXISTS goat_db;

CREATE DATABASE goat_db;

USE goat_db;

CREATE TABLE users (
 user_id INTEGER AUTO_INCREMENT NOT NULL,
 user_name VARCHAR(30) NOT NULL,
 full_name VARCHAR(30) NOT NULL,
 email VARCHAR(30) NOT NULL,
 PRIMARY KEY (user_id)
 );
INSERT INTO users (user_name, full_name, email)
VALUES ("Enron Hubbard", "Ty Gerhardt", "tygerhardt@gmail.com");

INSERT INTO users (user_name, full_name, email)
VALUES ("Oscar Mild", "Bert Snert", "bert@gmail.com");

INSERT INTO users (user_name, full_name, email)
VALUES ("One Man Banned", "Ham Burgler", "ham@gmail.com");

INSERT INTO users (user_name, full_name, email)
VALUES ("Death Pimp Of Love", "Jane Goodall", "jane@gmail.com");

INSERT INTO users (user_name, full_name, email)
VALUES ("Surrealistic Brillo", "Ellen Degenerate", "ellen@gmail.com");

INSERT INTO users (user_name, full_name, email)
VALUES ("The Goat", "Billy McGoatington", "billy@gmail.com");


 CREATE TABLE quotes (
 quote_id INTEGER AUTO_INCREMENT NOT NULL,
 category_id INTEGER NOT NULL,
 user_id INTEGER NOT NULL,
 quote VARCHAR(1000) NOT NULL,
 PRIMARY KEY (quote_id)
 );
 
INSERT INTO quotes (category_id, user_ID, quote)
VALUES (1, 6, "Do not offend the office manager. He is subject to take back the keys to the shithouse. Always keeps it locked so no sinister stranger can sneak a shit and give all of the kids in the office some horrible condition.");

INSERT INTO quotes (category_id, user_ID, quote)
VALUES (2, 5, "A man has got to know his limitations.");

INSERT INTO quotes (category_id, user_ID, quote)
VALUES (3, 4, "Let them eat snek.");

INSERT INTO quotes (category_id, user_ID, quote)
VALUES (4, 3, "Give me liberty or give me unlimited trips to the salad bar.");

INSERT INTO quotes (category_id, user_ID, quote)
VALUES (5, 2, "I don't care...do you?");

INSERT INTO quotes (category_id, user_ID, quote)
VALUES (6, 1, "What happens to a dream deferred? Does it dry up Like a raisin in the sun? Or fester like a sore...and then run? Does it stink like rotten meat? Or crust and sugar over...like a syrupy sweet? Maybe it just sags like a heavy load. Or does it explode?");
 
 
 CREATE TABLE categories (
 category_id INTEGER AUTO_INCREMENT NOT NULL,
 category_name VARCHAR(50),
 PRIMARY KEY (category_id)
 );
 
INSERT INTO categories (category_name)
VALUES ("Profundity");

INSERT INTO categories (category_name)
VALUES ("Humor");

INSERT INTO categories (category_name)
VALUES ("Gravitas");

INSERT INTO categories (category_name)
VALUES ("Political");

INSERT INTO categories (category_name)
VALUES ("Verbosity");

INSERT INTO categories (category_name)
VALUES ("Pithiness");
 
 
 CREATE TABLE votes (
 vote_id INTEGER AUTO_INCREMENT NOT NULL,
 quote_id INTEGER NOT NULL,
 category_id INTEGER,
 number_of_votes INTEGER,
 PRIMARY KEY (vote_id)
);

INSERT INTO votes (quote_ID, category_id, number_of_votes)
VALUES (1, 1, 100);

INSERT INTO votes (quote_ID, category_id, number_of_votes)
VALUES (2, 2, 90);

INSERT INTO votes (quote_ID, category_id, number_of_votes)
VALUES (3, 3, 80);

INSERT INTO votes (quote_ID, category_id, number_of_votes)
VALUES (4, 4, 70);

INSERT INTO votes (quote_ID, category_id, number_of_votes)
VALUES (5, 5, 60);

INSERT INTO votes (quote_ID, category_id, number_of_votes)
VALUES (6, 6, 50);

