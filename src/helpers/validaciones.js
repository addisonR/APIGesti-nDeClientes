export const datosValidos = (
  rif,
  razon_social,
  telefono,
  direccion,
  correo
) => {
  if (!rif || typeof rif !== "string" || rif.length <= 8) {
    return "Formato del rif esperado erroneo";
  }
  if (!razon_social || typeof razon_social !== "string") {
    return "Formato de la razon social esperado erroneo";
  }
  if (!telefono || typeof telefono !== "string" || telefono.length <= 8) {
    return "Formato del numero de telefono esperado erroneo";
  }
  if (!direccion || typeof direccion !== "string") {
    return "Formato de la direccion esperado erroneo";
  }
  if (!correo || typeof correo !== "string" || !validateEmail(correo)) {
    return "Formato del correo esperado erroneo";
  }
  return "Datos validados";
};

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
