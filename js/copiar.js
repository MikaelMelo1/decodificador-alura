// Função para copiar texto
function copiarTexto() {
    // Seleciona o parágrafo que contém o texto criptografado
    let textoCopiado = document.querySelector(".texto-criptografado p");
    // Seleciona o botão de copiar
    var btnCopy = document.querySelector("#copiar");

    // Adiciona um evento de clique ao botão de copiar
    btnCopy.addEventListener("click", function () {
        // Copia o texto do parágrafo para a área de transferência
        navigator.clipboard.writeText(textoCopiado.innerText);
        // Exibe um alerta indicando que o texto foi copiado
        alert("Texto copiado");
        // Recarrega a página
        location.reload();
    });
}

// Chama a função copiarTexto para ativar a funcionalidade
copiarTexto();
