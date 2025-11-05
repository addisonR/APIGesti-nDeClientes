import ClienteService from "../services/ClienteService.js";

const crearCliente = async (req, res) => {
  const { rif, razon_social, telefono, direccion, correo } = req.body;
  try {
    const clienteNuevo = await ClienteService.crearCliente(
      rif,
      razon_social,
      telefono,
      direccion,
      correo
    );
    if (clienteNuevo.estatusCode !== 201) {
      return res.status(clienteNuevo.estatusCode).json(clienteNuevo.mensaje);
    }
    return res.status(201).json(clienteNuevo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const obtenerClientes = async (req, res) => {
  try {
    const listaClientes = await ClienteService.obtenerClientes();
    if (listaClientes.estatus === 404) {
      return res.status(listaClientes.estatus).json(listaClientes.mensaje);
    }
    return res.status(200).json(listaClientes.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const obtenerClientePorId = async (req, res) => {
  const id = req.params.id;
  try {
    const cliente = await ClienteService.obtenerClientePorId(id);
    if (cliente.estatusCode === 404) {
      return res.status(cliente.estatusCode).json(cliente.mensaje);
    }
    return res.status(200).json(cliente.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const actualizarCliente = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Parametros de la request incompletos" });
  }

  const { rif, razon_social, telefono, direccion, correo } = req.body;
  try {
    const cliente = await ClienteService.actualizarCliente(
      id,
      rif,
      razon_social,
      telefono,
      direccion,
      correo
    );
    if (cliente.estatusCode !== 200) {
      return res.status(cliente.estatusCode).json(cliente.mensaje);
    }
    return res.status(200).json(cliente.mensaje);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
};
