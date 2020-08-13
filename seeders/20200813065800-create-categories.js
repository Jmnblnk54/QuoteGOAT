/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [{
        categoryName: "Profundity",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryName:"Humor",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryName: "Gravitas",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryName: "Political",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryName:"Verbosity",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        categoryName: "Pithiness",
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};
