// Seleciona o elemento textarea com o id 'texto-principal' e o armazena na variável textArea
let textArea = document.querySelector("#texto-principal");

// Adiciona um evento de input ao textarea que chama a função autoResize sempre que o usuário digita ou apaga texto
textArea.addEventListener('input', autoResize, false);

// Função que redimensiona automaticamente a altura do textarea
function autoResize() {
    // Redefine a altura do textarea para 'auto' para recalcular a altura correta
    this.style.height = 'auto';
    // Ajusta a altura do textarea para o scrollHeight (a altura total do conteúdo)
    this.style.height = this.scrollHeight + 'px';
}
