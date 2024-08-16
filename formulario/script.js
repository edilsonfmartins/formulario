// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Coleta os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação básica
    if (name && email && message) {
        // Exibe mensagem de sucesso
        document.getElementById('message').innerText = 'Mensagem enviada com sucesso!';
        document.getElementById('message').style.color = 'green';
        // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário

        // Limpa o formulário
        document.getElementById('contactForm').reset();
    } else {
        // Exibe mensagem de erro
        document.getElementById('message').innerText = 'Por favor, preencha todos os campos.';
        document.getElementById('message').style.color = 'red';
    }
});
