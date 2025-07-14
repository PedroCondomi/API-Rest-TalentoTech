import "dotenv/config";
import express from "express";
import cors from "cors";

// TODO Subir a Github, Actualizar README, comentar todo
// TODO crear usuarios y autorizacion JWT
// TODO subir a Vercel (atento a las variables de entorno)

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Esto es al pedo por ahora

app.get("/", (req, res) => {
  res.send("kepasaca");
});

import productsRouter from "./routes/products-router.js";
app.use(productsRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});

// Ideas para e-commerce: ideas.txt
