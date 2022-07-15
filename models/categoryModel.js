module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, underscored: true }
  );

  return Category;
};
