import AuthService from "../service/AuthService.js";

const authService =
new AuthService();

//Um objeto authService que instancia a Classe AuthService com todos os seus metodos
export default class AuthController {

    static async login(req, res){

        console.log("LOGIN CHAMADO");

        try{

            const {email, password} = req.body;

            const usuario =
            await authService.login(
                email,
                password
            );

            return res.status(200).json({
                sucesso:true,
                usuario
            });

        }catch(error){

            return res.status(401).json({
                sucesso:false,
                mensagem:error.message
            });

        }

    }

}