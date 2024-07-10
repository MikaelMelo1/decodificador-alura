// Lista de substituições para criptografia
var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
// Lista de letras normais correspondentes
var listaNormal = ["e", "i", "a", "o", "u"];

// Mapeamento de letras para suas respectivas criptografias
const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

// Mapeamento de criptografias para suas respectivas letras
const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

// Função para criptografar texto
function criptografaTexto(texto) {
    let textoConvertido = texto;
    // Substitui cada letra no texto pelo seu valor criptografado
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaCriptografar[letra]);
    });
    return textoConvertido; // Retorna o texto criptografado
}

// Função para descriptografar texto
function descriptografaTexto(texto) {
    let textoParaConverter = texto;
    // Substitui cada valor criptografado no texto pela sua letra correspondente
    listaCriptografica.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, cifrasParaDescriptografar[letra]);
    });
    return textoParaConverter; // Retorna o texto descriptografado
}
