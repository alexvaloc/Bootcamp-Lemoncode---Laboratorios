let puntuacion: number = 0;
const BACK_CARD_URL =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
/*nos aseguramos de que el DOM está cargado */
document.addEventListener("DOMContentLoaded", () => {
  const botonReiniciar = document.getElementById("botonReiniciar");
  const botonDameCarta = document.getElementById("dame-carta");
  const botonPlantarse = document.getElementById("botonPlantarse");
  const botonQuePasaria = document.getElementById("botonQuePasaria");

  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", dameCarta);
  }
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", plantarse);
  }
  if (botonReiniciar instanceof HTMLButtonElement) {
    botonReiniciar.addEventListener("click", reset);
  }
  if (botonQuePasaria instanceof HTMLButtonElement) {
    botonQuePasaria.addEventListener("click", queHabriaPasado);
  }
});

const muestraPuntuacion = (puntuacion: number): void => {
  modificarMensajePuntuacion(`Puntuación actual: ${puntuacion}`);
};

const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const comprobarNumeroAleatorio = (numeroCarta: number): number => {
  return numeroCarta > 7 ? numeroCarta + 2 : numeroCarta;
};

const dameCarta = (): void => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = comprobarNumeroAleatorio(numeroAleatorio);
  console.log("Carta: ", numeroCarta);

  const url_img = elegirUrlCarta(numeroCarta);
  mostrarCarta(url_img);

  const puntos = obtenerPuntos(numeroCarta);
  const nuevaPuntuacion = sumarPuntuacion(puntos);
  actualizarPuntuacion(nuevaPuntuacion);

  muestraPuntuacion(puntuacion);

  if (puntuacion > 7.5) {
    gestionarGameOver();
  }
};

const obtenerPuntos = (numeroCarta: number): number => {
  return numeroCarta > 7 ? 0.5 : numeroCarta;
};

const sumarPuntuacion = (puntos: number): number => {
  return puntuacion + puntos;
};

const actualizarPuntuacion = (nuevaPuntuacion: number): void => {
  puntuacion = nuevaPuntuacion;
};

const deshabilitarBotones = (): void => {
  const botonDameCarta = document.getElementById("dame-carta");
  const botonPlantarse = document.getElementById("botonPlantarse");
  if (
    botonDameCarta instanceof HTMLButtonElement &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = true;
    botonPlantarse.disabled = true;
  }
};

const habilitarBotones = (): void => {
  const botonDameCarta = document.getElementById("dame-carta");
  const botonPlantarse = document.getElementById("botonPlantarse");
  if (
    botonDameCarta instanceof HTMLButtonElement &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonDameCarta.disabled = false;
    botonPlantarse.disabled = false;
  }
};

const mostrarBotonReiniciar = (decision: boolean): void => {
  const botonReiniciar = document.getElementById("botonReiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    if (decision) {
      botonReiniciar.hidden = false;
    } else {
      botonReiniciar.hidden = true;
    }
  }
};

const elegirMensaje = (): void => {
  let mensaje = "";
  if (puntuacion <= 4) {
    mensaje = "Has sido muy conservador";
  } else if (puntuacion <= 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntuacion < 7.5) {
    mensaje = "Casi casi...";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena!";
  }
  modificarMensaje(mensaje);
};

const modificarMensaje = (mensaje: string): void => {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje instanceof HTMLParagraphElement) {
    elementoMensaje.textContent = mensaje;
  }
};

const modificarMensajePuntuacion = (mensajePuntuacion: string): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion instanceof HTMLParagraphElement) {
    elementoPuntuacion.textContent = mensajePuntuacion;
  }
};

const manejoBotonQueHabriaPasado = (decision: boolean): void => {
  const botonQuePAsaria = document.getElementById("botonQuePasaria");
  if (botonQuePAsaria instanceof HTMLButtonElement) {
    if (decision) {
      botonQuePAsaria.hidden = false;
    } else {
      botonQuePAsaria.hidden = true;
    }
  }
};

const queHabriaPasado = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = comprobarNumeroAleatorio(numeroAleatorio);
  console.log("Carta: ", numeroCarta);

  const url_img = elegirUrlCarta(numeroCarta);
  mostrarCarta(url_img);

  const puntos = obtenerPuntos(numeroCarta);
  const nuevaPuntuacion = sumarPuntuacion(puntos);
  actualizarPuntuacion(nuevaPuntuacion);

  const mensaje = mensajeQueHabriaPasado(nuevaPuntuacion);
  modificarMensaje(mensaje);
  manejoBotonQueHabriaPasado(false);
};

const mensajeQueHabriaPasado = (nuevaPuntuacion: number): string => {
  let mensaje = `Si hubieras pedido otra carta, `;
  if (nuevaPuntuacion > 7.5) {
    mensaje += `te habrías pasado con un total de ${nuevaPuntuacion} puntos 😬`;
  } else if (nuevaPuntuacion === 7.5) {
    mensaje += `¡habrías clavado el 7,5! 🎉`;
  } else {
    mensaje += `habrías llegado a ${nuevaPuntuacion}.`;
  }

  return mensaje;
};

const plantarse = (): void => {
  elegirMensaje();
  deshabilitarBotones();
  manejoBotonQueHabriaPasado(true);
  mostrarBotonReiniciar(true);
};

const gestionarGameOver = (): void => {
  modificarMensaje(`UY! Te has pasado de 7,5... has perdido :(`);
  deshabilitarBotones();
  mostrarBotonReiniciar(true);
};

const reset = (): void => {
  actualizarPuntuacion(0);
  modificarMensaje("");
  modificarMensajePuntuacion("");
  mostrarCarta(BACK_CARD_URL);
  manejoBotonQueHabriaPasado(false);
  mostrarBotonReiniciar(false);
  habilitarBotones();
};

const elegirUrlCarta = (numeroCarta: number): string => {
  let fuenteImagen: string = "";
  switch (numeroCarta) {
    case 1:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      fuenteImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      fuenteImagen = BACK_CARD_URL;
  }

  return fuenteImagen;
};

const mostrarCarta = (url_img: string): void => {
  const elementoCarta = document.getElementById("carta");
  if (elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src = url_img;
  }
};
