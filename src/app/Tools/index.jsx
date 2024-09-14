export function converterEmMoedas(valor){
    return String(valor.toFixed(2)).replace(".", ",")
}

export function nomeMaiusculo(name) {
    return name
        .toLowerCase() // Converte todas as letras para minúsculas
        .split(' ')    // Divide o nome por espaços em um array de palavras
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Converte a primeira letra de cada palavra em maiúscula
        .join(' ');    // Junta as palavras de volta em uma string com espaços
}