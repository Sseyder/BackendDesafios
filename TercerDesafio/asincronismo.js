const terminado = (cantPalabras) => console.log(`Terminado, se mostraron ${cantPalabras} palabras`);

const mostrarPalabras = (texto, callback, tiempo=1000) =>{
    return new Promise ( (resolve) => {
        const array = texto.split(" ");
        let contador = 0;
        let intervalo = setInterval (() =>{
            if (contador < array.length) {
                console.log(array[contador]);
                contador++;
            }else{
                clearInterval(intervalo);
                callback (contador);
                resolve (contador);
            }
        },tiempo);
    })
}

const contarPalabrasTotales = async () => {
    let total = 0;
    total = await mostrarPalabras("Me llamo Leonel Marsilli", terminado, 1000);
    total += await mostrarPalabras("Tengo 24 años", terminado, 1000);
    total += await mostrarPalabras("Y mi main en el Lol es Akali", terminado, 1000);
    console.log("PROCESO FINALIZADO")
    console.log(`Se mostro una cantidad total de: ${total} PALABRAS`);
}
contarPalabrasTotales();