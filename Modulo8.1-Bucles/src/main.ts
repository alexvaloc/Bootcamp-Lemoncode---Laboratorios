type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//EXTRAER LISTA DE PACIENTES DE PEDIATRIA
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAsignadosAPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignadosAPediatria.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//EXTRAER PACIENTES DE PEDRIATRIA MENORES DE 10 AÑOS
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let i: number = 0;
  let pacientesAsignadosAPediatriaYMenoresDeDiezAnios: Pacientes[] = [];

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesAsignadosAPediatriaYMenoresDeDiezAnios.push(pacientes[i]);
    }
    i++;
  }

  return pacientesAsignadosAPediatriaYMenoresDeDiezAnios;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//PROTOCOLO DE URGENCIA SI FRECUENCIA CARDIACA > 100 & TEMPERATURA > 39º

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i: number = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};
console.log(
  "Activar protocolo de urgencias: ",
  activarProtocoloUrgencia(pacientes)
);

//REASIGNAR PACIENTES DE PEDIATRIA A MEDICO DE FAMILIA

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let listaPacientesReasignados: Pacientes[] = [];
  let i: number = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      let pacienteReasignado: Pacientes = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
      listaPacientesReasignados.push(pacienteReasignado);
    }
    i++;
  }

  return listaPacientesReasignados;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//COMPROBAR SI HAY ALGUN PACIENTE ASIGNADO A PEDIATRIA
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientesPediatria = false;

  for (let i: number = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientesPediatria = true;
      break;
    }
  }

  return hayPacientesPediatria;
};

console.log(
  "Podemos mandar al pediatra a casa: ",
  HayPacientesDePediatria(pacientes)
);

//CALCULA EL TOTAL DE PACIENTES ASIGNADOS A CADA ESPECIALIDAD

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroDePacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i: number = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Cardiólogo":
        numeroDePacientesPorEspecialidad.cardiologia += 1;
        break;
      case "Pediatra":
        numeroDePacientesPorEspecialidad.pediatria += 1;
        break;
      case "Medico de familia":
        numeroDePacientesPorEspecialidad.medicoDeFamilia += 1;
        break;
    }
  }

  return numeroDePacientesPorEspecialidad;
};

console.log(
  "Recuento por categorias: ",
  cuentaPacientesPorEspecialidad(pacientes)
);
