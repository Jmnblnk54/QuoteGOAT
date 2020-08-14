module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    categoryId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true, autoIncrement:true},
    categoryName: {type: DataTypes.STRING, allowNull: false}, });

  Category.associate = function (models) {
    Category.hasMany(models.Vote, {
      onDelete: "cascade",
      foreignKey:"categoryId"
    });
  };
  return Category;
};