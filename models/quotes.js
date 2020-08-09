module.exports = function (sequelize, DataTypes) {
  const Quote = sequelize.define("Quote", {
    quoteId: {type: DataTypes.INTEGER, allowNull: false},
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    quote: {type: DataTypes.STRING, allowNull: false} 
    dateAdded: {type: DataTypes.DATETIME, allowNull: false} });

  Quote.associate = function (models) {
    Quote.belongsTo(models.Votes, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Quote;
};