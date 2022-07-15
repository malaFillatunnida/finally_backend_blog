module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comment",
    {
      usernama: {
        type: DataTypes.STRING,
      },
      text: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: true, underscored: true }
  );

  return Comment;
};
