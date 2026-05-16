const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`SERVIDOR RODANDO COM SUCESSO. http://localhost:${PORT}`));


