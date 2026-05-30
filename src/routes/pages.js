import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/cadastrar", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../views/cadastro.html")
  );
});

router.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../views/login.html")
  );
});

router.get("/inicio", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../views/inicio.html")
  );
});

export default router;