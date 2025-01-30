document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Validação antes de enviar o formulário
    form.addEventListener("submit", function (event) {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const setor = document.getElementById("setor").value.trim();
        const cargo = document.getElementById("cargo").value.trim();

        if (nome === "" || email === "" || setor === "" || cargo === "") {
            alert("Por favor, preencha todos os campos obrigatórios!");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});
