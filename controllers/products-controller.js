import * as model from "../models/products-model.js";

// Funciones para los productos

const getAllProducts = async (req, res) => {
  return res.status(200).json(await model.getAllProducts());
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await model.getProductById(id);
  if (!product) {
    return res.status(404).json({
      Error: "No existe el producto",
    });
  }
  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { category, name, price } = req.body;
  const newProduct = await model.createProduct({ category, name, price });
  return res
    .status(201)
    .json({ msg: "Producto añadido con éxito", newProduct });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const { category, name, price } = req.body;
  const updProduct = await model.updateProduct(id, { category, name, price });
  return res
    .status(200)
    .json({ msg: "Producto actualizado correctamente", ...updProduct });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await model.deleteProduct(id);
  if (!product) {
    return res.status(404).json({
      Error: "No se pudo encontrar el producto",
    });
  }
  return res.status(200).json({
    msg: "Producto eliminado exitosamente",
  });
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
