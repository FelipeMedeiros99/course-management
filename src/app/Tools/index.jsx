export function converterEmMoedas(valor){
    return String(Number(valor).toFixed(2)).replace(".", ",")
}

export function nomeMaiusculo(name) {
    return name
        .toLowerCase() 
        .split(' ')    
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');   
}