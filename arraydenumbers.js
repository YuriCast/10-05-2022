let numeros = []

let n = 3
for (let i = 0; i < n; i++){
    console.log("Base:" + 2 + " expoente: " + (n-1))
    exponenciacao = 2**(n-i)
    numeros.push(exponenciacao)
}

numeros[0] = 8
numeros[1] = 4
numeros[2] = 2

console.log("Vetor Original" ,numeros)
for(let i = 0; i < n; i++){
    numeros[i] *= 2
}

console.log("Vetor Dobrado", numeros)
