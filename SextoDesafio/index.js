// Implementacion de un manejo de archivos simple con el modulo fs de node.js
const fs = require('fs');
const products = [];

// Impletamos un programa que contenga una clase llamada archivo
class File {
    //Recibe un nombre por callback
    constructor(name) {
        this.name = name;
    }
// Implementamos el metodo para leer
// Se mostrara en consola el listado total como un array de productos (Si existe el archivo). De no existir el archivo retornara un array vacio.
// Se usa promesas async await y manejo de errores
    async read() {
        try{
            const content = await fs.promises.readFile(this.name, "utf-8");
            if (content) return console.info(content);
        } catch (error) {
            console.error([]);
        }
    }

//Metodo para guardar
    async save(products) {
        try {
            products.id = products.length + 1;
            products.push(product);
            await fs.promises.writeFile(this.nombre, JSON.stringify(products));
        } catch (error) {
            console.error(`No se pudo leer el archivo. Error Numero: ${error}`);
        }
    }

//Metodo para borrar
    async erase() {
        try {
            fs.unlink(this.name, err => console.log(`El archivo no existe. Error Numeno: ${err}`));
        } catch (error) {
            console.error (`Ocurrio un error. Error Numero: ${error}`);
        }
    }
}

const file = new File("products.txt");

//Formato de cada producto
file.save ({
    title:"Product 1",
    price: 500,
    thumbnail:"URLProduct1"
})
file.save ({
    title:"Product 2",
    price: 2500,
    thumbnail:"URLProduct2"
})
file.save ({
    title:"Product 3",
    price: 1300,
    thumbnail:"URLProduct3"
})
file.read();
console.log(products)
