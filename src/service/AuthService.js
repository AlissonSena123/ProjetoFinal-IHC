import supabase from "../config/supabase.js";

//Service onde ele usa o comando do supabase para logar com senha que ja verifica no banco
export default class AuthService {

    async login(email, password) {

        console.log("CHEGOU NO SERVICE");

        const {
            data: { perfilUsuario },
            error
        } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        console.log("ERRO:", error);
        console.log("USER:", user);

        if (error) {
            throw new Error(
                "Email ou senha inválidos"
            );
        }

        const {data:  usuario, error:UsuarioError} = await supabase
        .from("usuarios")
        .select("*")
        .eq("auth_user_id")
        .single()

        if (UsuarioError) throw new Error("Usuário não encontrado na tabela usuários");

        return usuario;

    };

};