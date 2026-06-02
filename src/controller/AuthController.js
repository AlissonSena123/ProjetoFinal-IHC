export default class AuthController {
    constructor (authService) {
        this.authService = authService;
    };

    login = async (req, res) => {

        try {
            const {email} = req.body;

            const usuario = await this.authService.autenticar(email);

            return res.status(200).json({sucesso: true, usuario});
            
        }catch(error) {
            return res.status(400).json({
                sucesso: false,
                mensagem: error.message
            });
        };
    };
};