import { BACK_CARD_URL } from "./modelo";
// import {elegirMensaje} from "./motor";

export const muestraPuntuacion = (puntuacion: number): void => {
  modificarMensajePuntuacion(`Puntuación actual: ${puntuacion}`);
};

export const deshabilitarBotones = (): void => {
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

export const habilitarBotones = (): void => {
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

export const modificarMensajePuntuacion = (mensajePuntuacion: string): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion instanceof HTMLParagraphElement) {
    elementoPuntuacion.textContent = mensajePuntuacion;
  }
};

export const manejoBotonQueHabriaPasado = (decision: boolean): void => {
  const botonQuePAsaria = document.getElementById("botonQuePasaria");
  if (botonQuePAsaria instanceof HTMLButtonElement) {
    if (decision) {
      botonQuePAsaria.hidden = false;
    } else {
      botonQuePAsaria.hidden = true;
    }
  }
};

export const modificarMensaje = (mensaje: string): void => {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje instanceof HTMLParagraphElement) {
    elementoMensaje.textContent = mensaje;
  }
};

export const gestionarGameOver = (): void => {
  modificarMensaje(`UY! Te has pasado de 7,5... has perdido :(`);
  deshabilitarBotones();
  mostrarBotonReiniciar(true);
};

export const elegirUrlCarta = (numeroCarta: number): string => {
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

export const mostrarCarta = (url_img: string): void => {
  const elementoCarta = document.getElementById("carta");
  if (elementoCarta instanceof HTMLImageElement) {
    elementoCarta.src = url_img;
  }
};

export const mostrarBotonReiniciar = (decision: boolean): void => {
  const botonReiniciar = document.getElementById("botonReiniciar");
  if (botonReiniciar instanceof HTMLButtonElement) {
    if (decision) {
      botonReiniciar.hidden = false;
    } else {
      botonReiniciar.hidden = true;
    }
  }
};
