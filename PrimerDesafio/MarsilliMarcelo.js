class Usuario {
    constructor (nombre, apellido, mascotas, libros,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }

    // Esta funcion nos brinda el nombre completo del usuario.
    getFullName () {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y soy un usuario`);
    }

    // Esta funcion nos permite agregar una mascota a el array de mascotas.
    addMascota(mascota) {
        this.mascotas = [...this.mascotas, mascota];

        // Otra forma de agregarlas.
        // this.mascotas.push(mascotas);
    }

    // Esta funcion nos permite contar las mascotas dentro del array.
    countMascotas() {
        console.log(`Tengo ${this.mascotas.length} mascotas :D`);
    }

    getNombresMascotas() {
        console.log(`Mis mascotas se llaman ${this.mascotas}`);
    }

    // Esta funcion nos permite agregar un libro nuevo al arrat de libros.
    addLibro(libro, autor) {
        const newLibro = [...this.libros, {nombre: libro, autor: autor}];
        this.libros = newLibro;

        // Otra forma de agregar un libro nuevo.
        // this.libros.push( {nombre: libro, autor} )
    }

    // Nos muestra los nombres de los libros, no los autores.
    getNombresLibros() {
        console.log(this.libros.map((libro) => libro.nombre));
    }
}

// Se crea la constante del nuevo usuario con su nombre y los dos arrays correspondientes
const leonel = new Usuario ('Leonel', 'Marsilli', [], []);

leonel.getFullName();
leonel.addLibro('Cien Años de Soledad', 'Gabriel Garcia Marquez');
leonel.addLibro('El Imperio Final', 'Brandon Sanderson');
leonel.addLibro('Aleacion de Ley', 'Brandon Sanderson');
leonel.addLibro('Amanecer Rojo', 'Pierce Brown');
leonel.addMascota('Arturo');
leonel.addMascota(' Misha');
leonel.addMascota(' Hinata');
leonel.countMascotas();
leonel.getNombresMascotas();
leonel.getNombresLibros();
