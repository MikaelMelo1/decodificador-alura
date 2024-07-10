function criptografa() {
    // Seleciona o elemento textarea com o id 'texto-principal'
    var campoTexto = document.getElementById("texto-principal");
    // Seleciona o botão de criptografia
    var btnCryptography = document.querySelector("#criptografar");

    // Adiciona um evento de clique ao botão de criptografia
    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do botão
        const textoCriptografado = criptografaTexto(campoTexto.value); // Criptografa o texto do textarea

        // Esconde o campo que mostra quando não há retorno
        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        // Mostra o campo que exibe o texto criptografado
        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        // Seleciona o parágrafo dentro do campo de texto criptografado
        var paragrafo = document.querySelector(".texto-criptografado p");

        // Converte o texto criptografado para minúsculas
        var minusculas = textoCriptografado.toLowerCase();

        // Função para verificar se há caracteres especiais
        function temCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        // Remove acentos do texto
        var comAcento = textoCriptografado;
        var semAcento = comAcento.normalize("NFD");

        // Verifica se o texto está em minúsculas, sem acento e sem caracteres especiais
        if (textoCriptografado === minusculas && textoCriptografado === semAcento && temCaracterEspecial(textoCriptografado) == false) {
            paragrafo.textContent = textoCriptografado; // Exibe o texto criptografado no parágrafo
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."; // Mensagem de erro
        }
    })
}

criptografa(); // Chama a função de criptografia

function descriptografa() {
    // Seleciona o elemento textarea com o id 'texto-principal'
    var campoTexto = document.getElementById("texto-principal");
    // Seleciona o botão de descriptografia
    var btnCryptography = document.querySelector("#descriptografar");

    // Adiciona um evento de clique ao botão de descriptografia
    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do botão
        const textoDescriptografado = descriptografaTexto(campoTexto.value); // Descriptografa o texto do textarea

        // Esconde o campo que mostra quando não há retorno
        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        // Mostra o campo que exibe o texto descriptografado
        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        // Seleciona o parágrafo dentro do campo de texto descriptografado
        var paragrafo = document.querySelector(".texto-criptografado p");

        // Converte o texto descriptografado para minúsculas
        var minusculas = textoDescriptografado.toLowerCase();

        // Função para verificar se há caracteres especiais
        function temCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        // Remove acentos do texto
        var comAcento = textoDescriptografado;
        var semAcento = comAcento.normalize("NFD");

        // Verifica se o texto está em minúsculas, sem acento e sem caracteres especiais
        if (textoDescriptografado === minusculas && textoDescriptografado === semAcento && temCaracterEspecial(textoDescriptografado) == false) {
            paragrafo.textContent = textoDescriptografado; // Exibe o texto descriptografado no parágrafo
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."; // Mensagem de erro
        }
    })
}

descriptografa(); // Chama a função de descriptografia
