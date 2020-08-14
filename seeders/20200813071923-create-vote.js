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
        updatedAt: new Date(),
        QuoteQuoteId: 1,
        CategoryCategoryId: 1
      },{
        quoteId:2,
        categoryId: 2,
        numberOfVotes: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        QuoteQuoteId: 2,
        CategoryCategoryId: 2
      },{
        quoteId:3,
        categoryId: 3,
        numberOfVotes: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
        QuoteQuoteId: 3,
        CategoryCategoryId: 3
      },{
        quoteId:4,
        categoryId: 4,
        numberOfVotes: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
        QuoteQuoteId: 4,
        CategoryCategoryId: 4
      },{
        quoteId:5,
        categoryId: 5,
        numberOfVotes: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        QuoteQuoteId: 5,
        CategoryCategoryId: 5
      },{
        quoteId:6,
        categoryId: 6,
        numberOfVotes: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        QuoteQuoteId: 6,
        CategoryCategoryId: 6
      }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Votes", null, {});
  }
};
