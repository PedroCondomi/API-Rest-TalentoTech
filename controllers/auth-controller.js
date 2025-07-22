import * as model from "../models/users-model.js";
import { generarJWT } from "../middlewares/index.js";
import bcryptjs from "bcryptjs";

// Función de inicio de sesión

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await model.getUserByEmail(email);

    // Verificar si el mail existe
    if (!user) {
      return res.status(404).json({
        Error: "No existe el usuario",
      });
    }

    // Verificar si la contraseña es correcta
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        Error: "Contraseña errónea",
      });
    }

    // Generer el JWT
    const token = await generarJWT(user.id);

    return res.json({ UserID: `${user.id}`, Email: `${user.email}`, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Algo salió mal",
    });
  }
};

export { login };
