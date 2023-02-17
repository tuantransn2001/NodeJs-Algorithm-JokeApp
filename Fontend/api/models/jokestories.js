"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JokeStories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JokeStories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      story: { type: DataTypes.STRING },
      vote: { type: DataTypes.STRING, allowNull: true },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "JokeStories",
    }
  );
  return JokeStories;
};
