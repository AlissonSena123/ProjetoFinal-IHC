export default class Authservice {

    constructor (authRepository) {
        this.authRepository = authRepository;
    };

    async autenticar(email) {

        const usuario = await this.authRepository.buscarPorEmail(email);

        if (!usuario) throw new Error("Usuário não encontrado!");

        return usuario;
    }
};