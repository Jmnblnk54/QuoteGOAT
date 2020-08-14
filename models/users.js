module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userId: {type: DataTypes.INTEGER, allowNull: false, primaryKey:true, autoIncrement: true},
    userName: {type: DataTypes.STRING, allowNull: false},
    fullName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false} });

  User.associate = function (models) {
    User.hasMany(models.Quote, {
      onDelete:"cascade",
      foreignKey: "userId"
    });
  };
  return User;
};