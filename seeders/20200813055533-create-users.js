/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [{
        userName:"Enron Hubbard",
        fullName: "Ty Gerhardt",
        email:"tygerhardt@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:"Oscar Mild",
        fullName: "Bert Snert",
        email:"bert@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:"One Man Banned",
        fullName: "Ham Burgler",
        email:"ham@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:"Death Pimp Of Love",
        fullName: "Jane Goodall",
        email:"jane@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:"Surrealistic Brillo",
        fullName: "Ellen Degenerate",
        email:"ellen@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:"The Goat",
        fullName: "Billy McGoatington",
        email:"billy@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
