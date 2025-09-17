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
  const listaPacientesPediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return listaPacientesPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//EXTRAER PACIENTES DE PEDIATRIA < 10 años

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const listaPediatriaMenoresDiezAnios: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );

  return listaPediatriaMenoresDiezAnios;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//ACTIVAR PROTOCOLO DE URGENCIA SI FRECUENCIA CARDIACA > 100 && TEMP > 39º

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  const protocoloUrgencias: boolean = pacientes.every(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  activarProctolo = protocoloUrgencias;

  return activarProctolo;
};

console.log("Activar protocolo?:", activarProtocoloUrgencia(pacientes));

//REASIGNAR PACIENTES DE PEDIATRIA A MEDICO DE FAMILIA

const reasignaPacientesAMedicoDeFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const nuevaListaPacientes = pacientes.map((paciente) => {
    //Si especialidad = Pediatra, creamos una copia del objeto y machacamos la nueva especialidad para añadirla al nuevo array
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia" as const, //Hay forma mejor de hacer esto?
      };
    } else {
      //Si no es de pediatría, añadimos una copia del paciente sin modoficar al nuevo array
      return paciente;
    }
  });

  return nuevaListaPacientes;
};

console.log(reasignaPacientesAMedicoDeFamilia(pacientes));

//COMPROBAR SI HAY PACIENTES ASIGNADOS A PEDIATRIA

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const hayPacientesEnPediatria: boolean = pacientes.some(
    (paciente) => paciente.especialidad === "Pediatra"
  );

  return hayPacientesEnPediatria;
};

console.log("Hay pacientes pediatricos?: ", HayPacientesDePediatria(pacientes));

//CALCULAR EL NUMERO TOTAL DE PACIENTES DE CADA ESPECIALIDAD

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let listaPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  const numeroPacientesPorEspecialidad = pacientes.reduce(
    (acumulador, paciente) => {
      if (paciente.especialidad === "Pediatra") {
        acumulador.pediatria++;
      }
      if (paciente.especialidad === "Medico de familia") {
        acumulador.medicoDeFamilia++;
      }
      if (paciente.especialidad === "Cardiólogo") {
        acumulador.cardiologia++;
      }
      return acumulador;
    },
    listaPorEspecialidad
  );

  return numeroPacientesPorEspecialidad;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
