module.exports = function (sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    quoteId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true, autoIncrement: true},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    quote: {type: DataTypes.STRING, allowNull: false} });

  Quote.associate = function (models) {
    Quote.hasMany(models.Vote, {
      onDelete: "cascade",
      foreignKey:"quoteId"
    });
    Quote.belongsTo(models.User, {
      foreignKey:{
        as:"userId",
        constraints:false,
      }
    });
  };
  console.log("Quote is: ", Quote);
  return Quote;
};