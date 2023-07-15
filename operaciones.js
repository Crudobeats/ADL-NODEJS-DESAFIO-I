const fs = require('fs');
const citasPath = './citas.json';

function registrar(nombre, edad, animal, color, enfermedad) {

  const citas = leerCitas();

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  citas.push(nuevaCita);

  guardarCitas(citas);

  console.log("Cita registrada exitosamente.");
}

function leer() {
  const citas = leerCitas();

  console.log("Citas registradas:");
  citas.forEach(cita => {
    //Se agrega separador visual para poder ordenar mejor los elementos//
    console.log("-------------------------");
    console.log("Nombre del animal:", cita.nombre);
    console.log("Edad:", cita.edad);
    console.log("Tipo de animal:", cita.animal);
    console.log("Color:", cita.color);
    console.log("Enfermedad:", cita.enfermedad);
  });
}

function leerCitas() {
  if (fs.existsSync(citasPath)) {
    const citasData = fs.readFileSync(citasPath, 'utf8');
    return JSON.parse(citasData);
  } else {
    return [];
  }
}

function guardarCitas(citas) {
  const citasData = JSON.stringify(citas, null, 2);
  fs.writeFileSync(citasPath, citasData);
}

module.exports = {
  registrar,
  leer
};
