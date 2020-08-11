module.exports = function (sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    voteId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true},
    quoteId: {type: DataTypes.INTEGER, allowNull: false},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    numberOfVotes: {type: DataTypes.INTEGER, allowNull: false} });


  return Vote;
};