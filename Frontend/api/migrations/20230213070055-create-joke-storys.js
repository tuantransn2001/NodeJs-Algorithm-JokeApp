"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JokeStories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      story: { type: Sequelize.TEXT },
      vote: { type: Sequelize.STRING, allowNull: true },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JokeStories");
  },
};
