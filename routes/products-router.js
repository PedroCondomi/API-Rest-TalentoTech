import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products-controller.js";
import { Router } from "express";

const router = Router();

router.get("/products/", getAllProducts);

// Hacer con params
// router.get("/products/search", searchProduct);

router.get("/products/:id", getProductById);

router.post("/products/", createProduct);

// router.put("/products/:id", (req, res) => {});

router.delete("/products/:id", deleteProduct);

export default router;
