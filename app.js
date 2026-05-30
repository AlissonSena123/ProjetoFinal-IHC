import express, { json, static } from "express";
import { join } from "path";
const app = express();
import pages from "./src/routes/pages.js";
const PORT = 3030;

app.use(json());
app.use(static(join(__dirname, "public")));
app.use(pages);

app.listen(PORT, () => console.log(`SERVIDOR RODANDO COM SUCESSO. http://localhost:${PORT}/login`));


