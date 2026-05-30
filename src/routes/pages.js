import { Router } from "express";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

router.get("/cadastrar", (req, res) => res.sendFile(join(__dirname, "../../views/cadastro.html")));
router.get("/login", (req, res) => res.sendFile(join(__dirname, "../../views/login.html")));
router.get("/inicio", (req, res) => res.sendFile(join(__dirname, "../../views/inicio.html")));
router.get("/agendar/sessao", (req, res) => res.sendFile(join(__dirname, "../../views/agendarSessao.html")));
router.get("/cadastrar/paciente", (req, res) => res.sendFile(join(__dirname, "../../views/cadastrarPaciente.html")));
router.get("/agenda", (req, res) => res.sendFile(join(__dirname, "../../views/agenda.html")));

export default router;
