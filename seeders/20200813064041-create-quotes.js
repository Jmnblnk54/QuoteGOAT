/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Quotes",
      [{
        categoryId:1,
        userId: 6,
        quote:"Do not offend the office manager. He is subject to take back the keys to the shithouse. Always keeps it locked so no sinister stranger can sneak a shit and give all of the kids in the office some horrible condition.",
        UserUserId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        categoryId:2,
        userId: 5,
        quote:"A man has got to know his limitations.",
        UserUserId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        categoryId:3,
        userId: 4,
        quote:"Let them eat snek.",
        UserUserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryId:4,
        userId: 3,
        quote:"Give me liberty or give me unlimited trips to the salad bar.",
        UserUserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryId:5,
        userId: 2,
        quote:"I don't care...do you?",
        UserUserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        categoryId:6,
        userId: 1,
        quote:"What happens to a dream deferred? Does it dry up Like a raisin in the sun? Or fester like a sore...and then run? Does it stink like rotten meat? Or crust and sugar over...like a syrupy sweet? Maybe it just sags like a heavy load. Or does it explode?",
        UserUserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Quotes", null, {});
  }
};
