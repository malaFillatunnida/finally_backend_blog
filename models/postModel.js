const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "post",
    {
      image: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("created_at")).format("MMMM D, YYYY");
        },
      },
      updated_at: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("updated_at")).format("MMMM D, YYYY");
        },
      },
    },
    { freezeTableName: true, underscored: true }
  );

  return Post;
};
