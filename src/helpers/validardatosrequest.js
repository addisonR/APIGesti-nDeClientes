const validarRequest = (req, res, next) => {
  const datos = req.body;
  if (!datos) {
    return res
      .status(400)
      .json({ message: "no ha introducido datos en la request" });
  }
  next();
};

export default validarRequest;
