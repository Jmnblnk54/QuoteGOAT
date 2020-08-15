USE odv6wrnrhzjip3uq;

-- Users data
INSERT INTO Users (userName, fullName, email, password)
VALUES ("Enron Hubbard", "Ty Gerhardt", "tygerhardt@gmail.com", "1234");

INSERT INTO Users (userName, fullName, email, password)
VALUES ("Oscar Mild", "Bert Snert", "bert@gmail.com", "1234");

INSERT INTO Users (userName, fullName, email, password)
VALUES ("One Man Banned", "Ham Burgler", "ham@gmail.com", "1234");

INSERT INTO Users (userName, fullName, email, password)
VALUES ("Death Pimp Of Love", "Jane Goodall", "jane@gmail.com", "1234");

INSERT INTO Users (userName, fullName, email, password)
VALUES ("Surrealistic Brillo", "Ellen Degenerate", "ellen@gmail.com", "1234");

INSERT INTO Users (userName, fullName, email, password)
VALUES ("The Goat", "Billy McGoatington", "billy@gmail.com", "1234");

-- quotes data
INSERT INTO quotes (categoryId, userId, quote, createdAt)
VALUES (1, 6, "Do not offend the office manager. He is subject to take back the keys to the shithouse. Always keeps it locked so no sinister stranger can sneak a shit and give all of the kids in the office some horrible condition.", '2020-08-09 11:13:00');

INSERT INTO quotes (categoryId, userId, quote, createdAt)
VALUES (2, 5, "A man has got to know his limitations.", '2020-08-09 11:14:00');

INSERT INTO quotes (categoryId, userId, quote, createdAt)
VALUES (3, 4, "Let them eat snek.", '2020-08-09 11:15:00');

INSERT INTO quotes (categoryId, userId, quote, createdAt)
VALUES (4, 3, "Give me liberty or give me unlimited trips to the salad bar.", '2020-08-09 11:16:00');

INSERT INTO quotes (categoryId, userId, quote, createdAt)
VALUES (5, 2, "I don't care...do you?", '2020-08-09 11:17:00');

INSERT INTO quotes (categoryId, userId, quote, createdAt)
VALUES (6, 1, "What happens to a dream deferred? Does it dry up Like a raisin in the sun? Or fester like a sore...and then run? Does it stink like rotten meat? Or crust and sugar over...like a syrupy sweet? Maybe it just sags like a heavy load. Or does it explode?", '2020-08-09 11:18:00');

-- categories
INSERT INTO categories (categoryName)
VALUES ("Profundity");

INSERT INTO categories (categoryName)
VALUES ("Humor");

INSERT INTO categories (categoryName)
VALUES ("Gravitas");

INSERT INTO categories (categoryName)
VALUES ("Political");

INSERT INTO categories (categoryName)
VALUES ("Verbosity");

INSERT INTO categories (categoryName)
VALUES ("Pithiness");
 
-- votes data

INSERT INTO votes (quoteId, categoryId, number_of_votes)
VALUES (1, 1, 100);

INSERT INTO votes (quoteId, categoryId, number_of_votes)
VALUES (2, 2, 90);

INSERT INTO votes (quoteId, categoryId, number_of_votes)
VALUES (3, 3, 80);

INSERT INTO votes (quoteId, categoryId, number_of_votes)
VALUES (4, 4, 70);

INSERT INTO votes (quoteId, categoryId, number_of_votes)
VALUES (5, 5, 60);

INSERT INTO votes (quoteId, categoryId, number_of_votes)
VALUES (6, 6, 50);


