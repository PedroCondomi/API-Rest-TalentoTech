import { validationResult } from "express-validator";

// Validar que los campos necesarios tengan valores
const validarCampos = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json(error);
  }

  next();
};

export default validarCampos;
