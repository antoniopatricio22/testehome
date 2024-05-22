function login() {
    // Obter o valor do campo de email
    var email = document.getElementById("email").value;

    // Verificar o email e redirecionar para a página adequada
    if (email === "colaborador@gmail.com") {
        //window.location.href = "HomeColaborador.html";
        window.top.location.href = "HomeColaborador.html";
    } else if (email === "membro@gmail.com") {
        //window.location.href = "HomeComite.html";
        window.top.location.href = "HomeComite.html";
    } else {
        // Caso nenhum email corresponda, você pode exibir uma mensagem de erro ou redirecionar para uma página padrão
        alert("Email inválido");
    }
}