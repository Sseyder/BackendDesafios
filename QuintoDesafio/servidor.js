// Declaramos la variable http
const http = require('http');
// Declaramos la variable de Numero Random
let numRandom = Math.floor(Math.random() * 10 + 1);

//Declaramos el objeto con sus propiedades
const object = {
    id: numRandom,
    title: `Product ` + numRandom,
    price: (Math.random() * 9999 + 0).toFixed(2),
    thumbnail: `Picture ` + numRandom
}

// Declaramos el servidor y su puerto de escucha
let server = http.createServer((req, res) =>{
    res.end(JSON.stringify(object));
})

server.listen(8080, () => {
    console.log(`Listening on port 8080`);
})