const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "departamento",
    {
      codigo: {
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        allowNull: false,
      },

      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      presupuesto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
