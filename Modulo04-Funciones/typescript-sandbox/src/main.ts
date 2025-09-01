//Estos valores se leen 1 vez, al cargar la página
const numeroTurno = document.getElementById("numero-turno");
const botonReset = document.getElementById("boton-reset");
const botonSiguiente = document.getElementById("boton-siguiente");
const botonAnterior = document.getElementById("boton-anterior");
const botonCambiar = document.getElementById("boton-cambiar-turno");
const inputNuevoTurno = document.getElementById(
  "turno-deseado"
) as HTMLInputElement;

function reset(numeroTurno: HTMLElement | null) {
  if (numeroTurno) {
    numeroTurno.textContent = "00";
  }
}

function siguiente(numeroTurno: HTMLElement | null) {
  if (!numeroTurno) return;
  let valor = Number(numeroTurno.textContent);
  valor = valor + 1;
  if (numeroTurno) {
    numeroTurno.textContent = valor.toString().padStart(2, "0"); //padStart(targetLength,padString)
  }
}

function anterior(numeroTurno: HTMLElement | null) {
  if (!numeroTurno) return;
  let valor = Number(numeroTurno.textContent) || 0;
  if (valor > 0) {
    valor = valor - 1;
  }
  if (numeroTurno) {
    numeroTurno.textContent = valor.toString().padStart(2, "0");
  }
}

function cambiarTurno() {
  const turnoDeseado = (
    document.getElementById("turno-deseado") as HTMLInputElement
  ).value;
  const numero = Number(turnoDeseado);
  if (numeroTurno && numero > 0) {
    //Solo adminitmos valores mayores a 0
    numeroTurno.textContent = turnoDeseado.toString().padStart(2, "0");
  }
}

//botón para limpiar el input
function limpiarInput() {
  if (inputNuevoTurno) {
    inputNuevoTurno.value = "";
  }
}

if (botonReset) {
  botonReset.addEventListener("click", () => {
    reset(numeroTurno);
    limpiarInput();
  });
}

if (botonSiguiente) {
  botonSiguiente.addEventListener("click", () => {
    siguiente(numeroTurno);
    limpiarInput();
  });
}

if (botonAnterior) {
  botonAnterior.addEventListener("click", () => {
    anterior(numeroTurno);
    limpiarInput();
  });
}

if (botonCambiar) {
  botonCambiar.addEventListener("click", () => {
    cambiarTurno();
    limpiarInput();
  });
}
