import AuthController from "../../src/controller/AuthController.js";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            mensagem: "Método não permitido"
        });
    }

    return AuthController.login(req, res);

}