USE quoteGoat_db;

-- users data
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

-- quotes data
INSERT INTO quotes (category_id, user_ID, quote, date_added)
VALUES (1, 6, "Do not offend the office manager. He is subject to take back the keys to the shithouse. Always keeps it locked so no sinister stranger can sneak a shit and give all of the kids in the office some horrible condition.", '2020-08-09 11:13:00');

INSERT INTO quotes (category_id, user_ID, quote, date_added)
VALUES (2, 5, "A man has got to know his limitations.", '2020-08-09 11:14:00');

INSERT INTO quotes (category_id, user_ID, quote, date_added)
VALUES (3, 4, "Let them eat snek.", '2020-08-09 11:15:00');

INSERT INTO quotes (category_id, user_ID, quote, date_added)
VALUES (4, 3, "Give me liberty or give me unlimited trips to the salad bar.", '2020-08-09 11:16:00');

INSERT INTO quotes (category_id, user_ID, quote, date_added)
VALUES (5, 2, "I don't care...do you?", '2020-08-09 11:17:00');

INSERT INTO quotes (category_id, user_ID, quote, date_added)
VALUES (6, 1, "What happens to a dream deferred? Does it dry up Like a raisin in the sun? Or fester like a sore...and then run? Does it stink like rotten meat? Or crust and sugar over...like a syrupy sweet? Maybe it just sags like a heavy load. Or does it explode?", '2020-08-09 11:18:00');

-- categories
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
 
-- votes data

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


