const distancia = 0

if (distancia <= 1000) {
    console.log('es mejor proceder a pie')
} else if (distancia > 1000 && distancia <= 10000) {
    console.log('es mejor proceder en bicicleta')
} else if (distancia > 10000 && distancia <= 30000) {
    console.log(' es mejor proceder en colectivo')
} else if (distancia > 30000 && distancia <= 100000) {
    console.log('es mejor proceder en auto')
} else if (distancia > 100000) {
    console.log('es mejor proceder en avion')
}