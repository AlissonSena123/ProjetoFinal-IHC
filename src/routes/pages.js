const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/cadastrar", (req, res) => res.sendFile(path.join(__dirname, "../../views/cadastro.html")));
router.get("/login", (req, res) => res.sendFile(path.join(__dirname, "../../views/login.html")));
router.get("/inicio", (req, res) => res.sendFile(path.join(__dirname, "../../views/inicio.html")));

module.exports = router;