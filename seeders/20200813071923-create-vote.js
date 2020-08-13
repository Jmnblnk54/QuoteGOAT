/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Votes",
      [{
        quoteId:1,
        categoryId: 1,
        numberOfVotes: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quoteId:2,
        categoryId: 2,
        numberOfVotes: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quoteId:3,
        categoryId: 3,
        numberOfVotes: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quoteId:4,
        categoryId: 4,
        numberOfVotes: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quoteId:5,
        categoryId: 5,
        numberOfVotes: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        quoteId:6,
        categoryId: 6,
        numberOfVotes: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Votes", null, {});
  }
};
