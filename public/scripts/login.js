const form =
document.getElementById("formLogin");

form.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        const response =
        await fetch(
            "/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data =
        await response.json();

        console.log("RESPOSTA LOGIN:", data);

        if (data.sucesso) {
            
            console.log("LOGIN SUCESSO")

            localStorage.setItem(
                "usuario",
                JSON.stringify(
                    data.usuario
                )
            );


            window.location.href =
            "/inicio.html";

        } else {

            alert(data.mensagem);

        }

    }
);