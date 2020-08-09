module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define("Category", {
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    categoryrName: {type: DataTypes.STRING, allowNull: false}, });

  Category.associate = function (models) {
    Category.belongsTo(models.Votes, {
      foreignKey: {
        allowNull: false}
    });
  };
  return Category;
};