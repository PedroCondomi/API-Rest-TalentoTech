import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products-controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/index.js";
import { Router } from "express";

const router = Router();

// Rutas productos
router.get("/products/", getAllProducts);

// Hacer con params
// router.get("/products/search", searchProduct);

router.get("/products/:id", getProductById);
router.post(
  "/products/create",
  [
    check("name", "El nombre del producto es obligatorio").not().isEmpty(),
    check("category", "La categoría del producto es obligatoria")
      .not()
      .isEmpty(),
    check("price", "El precio del producto es obligatorio").not().isEmpty(),
    check(
      "price",
      "El precio del producto debe ser un número entero"
    ).isNumeric(),
    validarCampos,
  ],
  createProduct
);
router.put(
  "/products/:id",
  [
    check(
      "price",
      "El precio del producto debe ser un número entero"
    ).isNumeric(),
  ],
  updateProduct
);
router.delete("/products/:id", deleteProduct);

export default router;
