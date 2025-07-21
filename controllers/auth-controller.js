import * as model from "../models/users-model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await model.getUserByEmail(email);

    // Verificar si el mail existe
    if (!user) {
      res.status(404).json({
        Error: "No existe el usuario",
      });
    }

    // Verificar si la contraseña es correcta
    const validPassword = bcryptjs.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({
        Error: "Contraseña errónea",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Algo salió mal",
    });
  }
};

const getUserByEmail = async (req, res) => {};

export { login, getUserByEmail };
