export function converterEmMoedas(valor){
    return String(valor.toFixed(2)).replace(".", ",")
}