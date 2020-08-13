module.exports = function (sequelize, DataTypes) {
  const Vote = sequelize.define("Vote", {
    voteId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true, autoIncrement:true},
    quoteId: {type: DataTypes.INTEGER, allowNull: false},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    numberOfVotes: {type: DataTypes.INTEGER, allowNull: false} });

  return Vote;
};