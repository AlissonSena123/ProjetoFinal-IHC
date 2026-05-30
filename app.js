import express, { json } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import pages from "./src/routes/pages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3030;

app.use(json());
app.use(express.static(join(__dirname, "public")));
app.use(pages);

app.listen(PORT, () => console.log(`SERVIDOR RODANDO COM SUCESSO. http://localhost:${PORT}/login`));


