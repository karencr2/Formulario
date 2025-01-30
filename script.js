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
            return;
        }

        // Criando objeto com os dados do formulário
        let formData = {
            nome: nome,
            sobrenome: document.getElementById("sobrenome").value,
            email: email,
            setor: setor,
            cargo: cargo,
            prioridade: document.getElementById("prioridade").value,
            objetivo: document.getElementById("objetivo").value,
            necessidade: document.getElementById("necessidade").value,
            usuarios: document.getElementById("usuarios").value,
            fonte: document.getElementById("fonte").value,
            fonte_dados: document.getElementById("fonte_dados").value,
            frequencia: document.getElementById("frequencia").value
        };

        // Enviando os dados via Fetch API
        fetch("https://script.google.com/macros/s/AKfycbwe-hyqAKWPT49oB93pNnim2nWJ9yho6yzwZCdsb__DjeiIJmM8Wr1ZwMW1CQ7TWeB1hw/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Dados enviados com sucesso!");
            form.reset(); // Limpa o formulário após envio
        })
        .catch(error => {
            alert("Erro ao enviar os dados: " + error);
        });

        event.preventDefault(); // Impede o envio padrão do formulário
    });
});
