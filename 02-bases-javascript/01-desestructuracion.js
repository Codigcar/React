const persona = {
    nombre: "Carlos",
    apellido: "Castilla",
};

const { nombre: nombre3, apellido } = persona;
console.log(nombre3);

const retornaPersona = ({ apellido }) => {
    console.log(apellido);
};

retornaPersona(persona);