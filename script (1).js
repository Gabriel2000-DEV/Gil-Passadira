// Inicializando o EmailJS com o seu user ID
emailjs.init("YOUR_USER_ID");  // Substitua pelo seu User ID do EmailJS

// Função para enviar o formulário para o EmailJS
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    // Enviar dados via EmailJS
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function(response) {
            console.log("Mensagem enviada com sucesso", response);
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contactForm").reset();  // Limpa o formulário após envio
        }, function(error) {
            console.log("Erro ao enviar mensagem", error);
            alert("Erro ao enviar mensagem. Tente novamente.");
        });
});
