
// Definición de Interfaces

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
    direccion: Direccion;
    mostrarInfo(): string;
}

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle(): string;
}

interface Pelicula {
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir(): string;
}

interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    encender(): string;
}

interface Usuario {
    username: string;
    password: string;
    roles: string[];
    login(): string;
}


// Objetos con tipado


const estudiante: Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
    }
};
console.log(estudiante.mostrarInfo());

const producto: Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
    }
};
console.log(producto.mostrarDetalle());

const pelicula: Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
    }
};
console.log(pelicula.reproducir());

const vehiculo: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
    }
};
console.log(vehiculo.encender());

const usuario: Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
    }
};
console.log(usuario.login());



// ==========================
// PARTE 2 - Correcciones


// ❌ "true" no puede usarse como tipo fijo aquí
// ✅ Se cambia por boolean
let myValue: number | string | boolean = 10;  

// ❌ Usar "Boolean" (con mayúscula) es mala práctica, debe ser "boolean"
let myBoolean: boolean = true;  

// ❌ "150" es string, pero la variable está tipada como number
let healthPoints: number = 150;  

// ❌ "otraEtiqueta" no pertenece al tipo declarado
let otherMultipleDataType: number | boolean | "myTag" = "myTag";  

// ✅ Variable sin tipo explícito → "any"
let myVar: any;  
myVar = 123; 
myVar = true; 
myVar = "texto"; 
myVar = {};  

// ❌ Las constantes deben inicializarse al declararse
const myConstant: number = 10;  

// ❌ Inferencia de tipo: al asignar "Texto inicial" es string, no puede reasignarse a number
let inferedDataType: string | number = "Texto inicial";  
inferedDataType = 123;  

// ❌ 1 no es boolean
const isActive: boolean = true;  

// ❌ "true" no corresponde a number | string
let mixed: number | string = "true";  

// ❌ "while" es palabra reservada en TS
let whileVar: string = "Hola";  

// ❌ "numer" está mal escrito
let myNumber: number = 10;  

// ❌ El arreglo debe ser solo de números
let numeros: number[] = [1, 2, 3];  

// ❌ La tupla necesita exactamente [string, number]
let tupla: [string, number] = ["Hola", 123];  

// ❌ Orden incorrecto en tipos: primero string, luego boolean
let otraTupla: [string, boolean] = ["Hola", true];  

// ❌ No se puede asignar null si es string estricto
let texto: string | null = "Hola mundo";  
texto = null;  

// ❌ "amarillo" no es parte del tipo literal
let color: "rojo" | "verde" | "azul" = "rojo";  

// ❌ valor es any, puede dar error si no se comprueba
let valor: any = 10;  
console.log(valor.toString());  

// ❌ Const no puede reasignarse
let version: number = 1.0;  
version = 2.0;  

// ❌ "apellido" no está definido en el tipo inferido de persona
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };  
persona.apellido = "Ruiz";  

// ❌ "undefined" no es válido para number salvo que se declare opcional
let edad: number | undefined = undefined;  


console.log("myValue:", myValue);
console.log("myBoolean:", myBoolean);
console.log("healthPoints:", healthPoints);
console.log("otherMultipleDataType:", otherMultipleDataType);
console.log("myVar:", myVar);
console.log("myConstant:", myConstant);
console.log("inferedDataType:", inferedDataType);
console.log("isActive:", isActive);
console.log("mixed:", mixed);
console.log("whileVar:", whileVar);
console.log("myNumber:", myNumber);
console.log("numeros:", numeros);
console.log("tupla:", tupla);
console.log("otraTupla:", otraTupla);
console.log("texto:", texto);
console.log("color:", color);
console.log("valor:", valor.toString());
console.log("version:", version);
console.log("persona:", persona);
console.log("edad:", edad);


export{};