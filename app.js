import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import pages from "./src/routes/pages.js";
import testeRouter from "./api/teste.js"
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(pages);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${PORT}/login`
  );
});