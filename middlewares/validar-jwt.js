import jwt from "jsonwebtoken";

const validarJWT = (req, res, next) => {
  const token = req.header("jtoken");

  if (!token) {
    return res.status(401).json({ msg: "No hay token en la petición" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRETKEY);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token no válido" });
  }
};

export default validarJWT;
