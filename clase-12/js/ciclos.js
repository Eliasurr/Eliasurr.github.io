//Crear un edificio con 4 pisos

//En cada piso hay una persona
//La persona tiene apellido, dni, nombre.

//recorrer cada piso hasta encontrar a "Jose"

const person1 = {
    nombre: "ulises",
    apellido: "rando"
}
const person2 = {
    nombre: "jose",
    apellido: "lopez"
}
const person3 = {
    nombre: "roberto",
    apellido: "carlos"
}
const person4 = {
    nombre: "marta",
    apellido: "gomez"
}

//defino edifcio
const edificio = [];
//agrego objetos al array
edificio.push(person1, person2, person3, person4);

console.log(edificio.length);

//Recorro el arreglo
for(let piso=0; piso < edificio.length; piso++){
    const personaEnPiso = edificio[piso];
    if(personaEnPiso.nombre === "jose"){
        console.log(`Jose esta en el piso ${piso}`);
    }
}

//Creamos un arreglo de personas

let personas = [];

//Usuario indica cantidad de personas a agregar

const cantidadPersonas = prompt("Cuantas personas se van a agregar?");

//Ciclo for para agregar personas en relacion al numero dado

for(let i=0; i < cantidadPersonas; i++){
    const nombre = prompt('Nombre: ');
    const apellido = prompt('Apellido:');

    //Agregar 'Persona' utilizando una funcion
    const persona = construirPersona(nombre,apellido);
    personas.push(persona);
}

//Defino funcion de Personas

function construirPersona(nombreP,apellidoP){
    const persona ={
        nombre: nombreP,
        apellido: apellidoP
    }
}


/* Cargar personas en un ARRAY
    Validar que los datos sean correctos
    - nombre: no vacio && longitud < 50
    - apellido: no vacio && longitud < 60
    - edad : numerico && > 0 && < 119
*/

let personas2 = [];
let edad;
const cargaErronea = [];

edad = prompt('Edad: ')
//Leer edad antes de evaluarla
while(  parseInt(edad) > 0  && parseInt(edad) < 119){
    const apellido = prompt('Apellido : ');
    const nombre = prompt('Nombre : ');
    personas.push(
        {
            edad: edad,
            nombre: nombre,
            apellido: apellido
        }
    );
}

//recorrer arreglo
for(const persona of personas2){
    //Aplicamos validaciones para la carga
    if(!persona.apellido || persona.apellido.length >60){
        cargaErronea.push(persona);
    }
    if(!persona.nombre || persona.nombre.length >50){
        cargaErronea.push(persona);
    }  
}

//Metodo de los arrays

for(const aux of cargaErronea){
    console.log(aux);
}