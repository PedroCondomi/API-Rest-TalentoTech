import * as model from "../models/products-model.js";

const getAllProducts = async (req, res) => {
  res.status(200).json(await model.getAllProducts());
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await model.getProductById(id);
  if (!product) {
    res.status(404).json({
      Error: "No existe el producto",
    });
  }
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { categories, name, price } = req.body;
  const newProduct = await model.createProduct({ categories, name, price });
  res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const { categories, name, price } = req.body;
  const updProduct = await model.updateProduct(id, { categories, name, price });
  res.status(200).json(updProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await model.deleteProduct(id);
  if (!product) {
    res.status(404).json({
      Error: "No se pudo encontrar el producto",
    });
  }
  res.status(200).json({
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
