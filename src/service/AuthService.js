import supabase from "../config/supabase.js";

//Service onde ele usa o comando do supabase para logar com senha que ja verifica no banco
export default class AuthService {

    async login(email, password) {

        const { data: {user}, error } =
        await supabase.auth.signInWithPassword({
            email,
            password
        });

        if(error){
            throw new Error(
                "Email ou senha inválidos"
            );
        };

        return user;

    };

};