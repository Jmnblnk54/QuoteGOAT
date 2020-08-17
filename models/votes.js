module.exports = function (sequelize, DataTypes) {
  const Vote = sequelize.define("Vote", {
    voteId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true, autoIncrement:true},
    quoteId: {type: DataTypes.INTEGER, allowNull: false},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    numberOfVotes: {type: DataTypes.INTEGER, allowNull: false} },
  // {timestamps:false}
  );

  Vote.associate = function(models){
    Vote.belongsTo(models.Quote,{
      foreignKey:{
        as:"quoteId",
        constraints:false,
      }
    });
    Vote.belongsTo(models.Category,{
      foreignKey:{
        as:"categoryId",
        constraints:false,
      }
    });
  };

  return Vote;
};