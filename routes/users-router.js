import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users-controller.js";
import { check } from "express-validator";
import { validarCampos, validarJWT } from "../middlewares/index.js";
import { Router } from "express";

const router = Router();

// Rutas usuarios

router.get("/users/", getAllUsers);
router.get("/users/:id", getUserById);
router.post(
  "/users/create",
  [
    validarJWT,
    check("email", "El correo es obligatorio y con formato válido")
      .isEmail()
      .not()
      .isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  createUser
);

router.put(
  "/users/:id",
  [
    validarJWT,
    check("email", "El correo debe tener un formato válido").isEmail(),
    validarCampos,
  ],
  updateUser
);
router.delete("/users/:id", [validarJWT], deleteUser);

export default router;
