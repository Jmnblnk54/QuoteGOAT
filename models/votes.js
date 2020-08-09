module.exports = function (sequelize, DataTypes) {
  const Vote = sequelize.define("Vote", {
    voteId: {type: DataTypes.INTEGER, allowNull: false},
    quoteId: {type: DataTypes.INTEGER, allowNull: false},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    numberOfVotes: {type: DataTypes.INTEGER, allowNull: false} });

  //Vote.associate = function (models) {
    //Vote.belongsTo(models.Votes, {
     // foreignKey: { allowNull: false}
   // });
  };
  return Vote;
};