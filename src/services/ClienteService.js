import Cliente from "../models/Cliente.js";
import { datosValidos } from "../helpers/validaciones.js";
import { where } from "sequelize";

const crearCliente = async (rif, razon_social, telefono, direccion, correo) => {
  const esValido = datosValidos(rif, razon_social, telefono, direccion, correo);
  if (esValido !== "Datos validados") {
    return { estatusCode: 400, mensaje: esValido };
  }

  try {
    const clienteExiste = await Cliente.findOne({ where: { rif } });
    if (clienteExiste !== null) {
      return { estatusCode: 409, mensaje: "El rif del cliente ya existe" };
    }

    const clienteNuevo = await Cliente.create({
      rif,
      razon_social,
      telefono,
      direccion,
      correo,
    });

    return {
      estatusCode: 201,
      mensaje: "Cliente creado con exito",
      id: clienteNuevo.id,
    };
  } catch (error) {
    throw {
      estatusCode: 500,
      mensaje: "Error interno del servidor",
      data: error.name,
    };
  }
};

const obtenerClientes = async () => {
  try {
    const listaClientes = await Cliente.findAll({
      where: { estatus: 1 },
    });
    if (listaClientes.length === 0) {
      return { estatus: 404, mensaje: "No se encontraron datos" };
    }
    return { estatus: 200, mensaje: "Lista de clientes", data: listaClientes };
  } catch (error) {
    throw {
      estatus: 500,
      mensaje: "Error interno del servidor",
      error: error.name,
    };
  }
};

const obtenerClientePorId = async (id) => {
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return { estatusCode: 404, mensaje: "No se escontro el Cliente" };
    }
    return { estatusCode: 200, mensaje: "Datos del cliente", data: cliente };
  } catch (error) {
    throw {
      estatusCode: 500,
      mensaje: "Error interno del servidor",
      data: error.name,
    };
  }
};

const actualizarCliente = async (
  id,
  rif,
  razon_social,
  telefono,
  direccion,
  correo
) => {
  try {
    const esValido = datosValidos(
      rif,
      razon_social,
      telefono,
      direccion,
      correo
    );
    if (esValido !== "Datos validados") {
      return { estatusCode: 400, mensaje: esValido };
    }

    const clienteExiste = await Cliente.findByPk(id);
    if (!clienteExiste) {
      return { estatusCode: 404, mensaje: "No se escontro el Cliente" };
    }

    const clienteActualizado = await Cliente.update(
      { rif, razon_social, telefono, direccion, correo },
      { where: { id } }
    );
    return {
      estatusCode: 200,
      mensaje: "Cliente fue actualizado",
      data: clienteActualizado,
    };
  } catch (error) {
    throw {
      estatusCode: 500,
      mensaje: "Error interno del servidor",
      data: error.name,
    };
  }
};

const borrarCliente = async (id) => {
  try {
    const clienteExiste = await Cliente.findByPk(id);
    if (!clienteExiste) {
      return { estatusCode: 404, mensaje: "No se escontro el Cliente" };
    }

    const clienteEliminado = await Cliente.update(
      { estatus: 0 },
      { where: { id } }
    );
    return {
      estatusCode: 200,
      mensaje: "Cliente fue eliminado",
      data: clienteEliminado,
    };
  } catch (error) {
    throw {
      estatusCode: 500,
      mensaje: "Error interno del servidor",
      data: error.name,
    };
  }
};

export default {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  borrarCliente,
};
