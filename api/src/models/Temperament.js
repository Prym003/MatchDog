const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define(
    "temperament",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
