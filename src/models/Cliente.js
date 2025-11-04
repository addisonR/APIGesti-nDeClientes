import { DataTypes } from "sequelize";
import db from "../db/mysql.js";

const Cliente = db.define(
  "clientes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rif: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    razon_social: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Cliente;
