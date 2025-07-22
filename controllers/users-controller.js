import * as model from "../models/users-model.js";

// Funciones para los usuarios

const getAllUsers = async (req, res) => {
  return res.status(200).json(await model.getAllUsers());
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await model.getUserById(id);
  if (!user) {
    return res.status(404).json({
      Error: "No existe el usuario",
    });
  }
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await model.createUser({ email, password });
  return res.status(201).json({ msg: "Usuario creado con éxito", newUser });
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const { email, password } = req.body;
  const updUser = await model.updateUser(id, { email, password });
  return res
    .status(200)
    .json({ msg: "Usuario actualizado correctamente", ...updUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await model.deleteUser(id);
  if (!user) {
    return res.status(404).json({
      Error: "No se pudo encontrar el usuario",
    });
  }
  return res.status(200).json({
    msg: "Usuario eliminado exitosamente",
  });
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
