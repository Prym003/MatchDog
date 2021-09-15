const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define(
    "breed",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING, //centimetros
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING, //kilogramos
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
