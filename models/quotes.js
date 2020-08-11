module.exports = function (sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    quoteId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    quote: {type: DataTypes.STRING, allowNull: false},
    dateAdded: {type: DataTypes.DATE, allowNull: false} });

  Quote.associate = function (models) {
    Quote.belongsTo(models.Vote, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Quote;
};