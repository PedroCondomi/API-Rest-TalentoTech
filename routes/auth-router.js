import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controllers/auth-controller.js";
import { validarCampos } from "../middlewares/index.js";

const router = Router();

// Ruta de inicio de sesión

router.post(
  "/auth/login",
  [
    check("email", "El correo no tiene un formato válido").isEmail(),
    check("email", "El correo es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);

export default router;
