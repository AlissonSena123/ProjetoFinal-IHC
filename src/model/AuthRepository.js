import supabase from "../config/supabase.js"

export default class AuthRepository {

    async buscarPorEmail(email) {

        const { data: usuario, error: updateError} = await supabase
        .from("usuarios")
        .select("*")
        .eq("email", email)
        .single();

       if (updateError) return null;

       return data;
    };
    
};