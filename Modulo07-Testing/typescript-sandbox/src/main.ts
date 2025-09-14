import { partida, BACK_CARD_URL } from "./modelo";
import {
  actualizarPuntuacion,
  comprobarNumeroAleatorio,
  generarNumeroAleatorio,
  obtenerPuntos,
  elegirMensaje,
  sumarPuntuacion,
  mensajeQueHabriaPasado,
} from "./motor";

import {
  elegirUrlCarta,
  gestionarGameOver,
  manejoBotonQueHabriaPasado,
  mostrarCarta,
  modificarMensaje,
  deshabilitarBotones,
  habilitarBotones,
  modificarMensajePuntuacion,
  mostrarBotonReiniciar,
  muestraPuntuacion,
} from "./ui";

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

const dameCarta = (): void => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = comprobarNumeroAleatorio(numeroAleatorio);
  console.log("Carta: ", numeroCarta);

  const url_img = elegirUrlCarta(numeroCarta);
  mostrarCarta(url_img);

  const puntos = obtenerPuntos(numeroCarta);
  const nuevaPuntuacion = sumarPuntuacion(puntos, partida);
  actualizarPuntuacion(nuevaPuntuacion, partida);

  muestraPuntuacion(partida.puntuacion);

  if (partida.puntuacion > 7.5) {
    gestionarGameOver();
  }
};

const queHabriaPasado = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCarta = comprobarNumeroAleatorio(numeroAleatorio);
  console.log("Carta: ", numeroCarta);

  const url_img = elegirUrlCarta(numeroCarta);
  mostrarCarta(url_img);

  const puntos = obtenerPuntos(numeroCarta);
  const nuevaPuntuacion = sumarPuntuacion(puntos, partida);
  actualizarPuntuacion(nuevaPuntuacion, partida);

  const mensaje = mensajeQueHabriaPasado(nuevaPuntuacion);
  modificarMensaje(mensaje);
  manejoBotonQueHabriaPasado(false);
};

const reset = (): void => {
  actualizarPuntuacion(0, partida);
  modificarMensaje("");
  modificarMensajePuntuacion("");
  mostrarCarta(BACK_CARD_URL);
  manejoBotonQueHabriaPasado(false);
  mostrarBotonReiniciar(false);
  habilitarBotones();
};

const plantarse = (): void => {
  let mensaje = elegirMensaje();
  modificarMensaje(mensaje);
  deshabilitarBotones();
  manejoBotonQueHabriaPasado(true);
  mostrarBotonReiniciar(true);
};
