import express from "express";

import AuthController from "../controller/AuthController";
import Authservice from "../service/AuthService";
import AuthRepository from "../model/AuthRepository";

const router = express.Router();

const authRepository = new AuthRepository();
const authService = new Authservice(authRepository);
const authController = new AuthController(authService);

router.post(
    "/login",
    authController.login
);

export default router;