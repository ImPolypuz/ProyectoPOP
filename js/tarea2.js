const numeros = [4, 16, 189, 25, 62]
let mayor = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (mayor < numeros[i]) {
        mayor = numeros[i]
    }
}

console.log(mayor)

