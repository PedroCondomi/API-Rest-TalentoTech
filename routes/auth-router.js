import { Router } from "express";
import { check } from "express-validator";
import { login, getUserByEmail } from "../controllers/auth-controller.js";
import { validarCampos } from "../middlewares/index.js";

const router = Router();

router.post(
  "/auth/login",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  login
);

export default router;
