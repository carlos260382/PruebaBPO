const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "empleado",

    {
      codigo: {
        type: DataTypes.BIGINT(10),
        allowNull: false,
      },
      nif: {
        type: DataTypes.STRING(9),
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      apellido1: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      apellido2: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      codigo_departamento: {
        type: DataTypes.BIGINT(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
