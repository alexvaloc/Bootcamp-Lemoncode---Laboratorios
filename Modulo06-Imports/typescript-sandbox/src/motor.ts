import { partida } from "./modelo";

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

export const comprobarNumeroAleatorio = (numeroCarta: number): number => {
  return numeroCarta > 7 ? numeroCarta + 2 : numeroCarta;
};

export const obtenerPuntos = (numeroCarta: number): number => {
  return numeroCarta > 7 ? 0.5 : numeroCarta;
};

export const sumarPuntuacion = (puntos: number): number => {
  return partida.puntuacion + puntos;
};

export const actualizarPuntuacion = (nuevaPuntuacion: number): void => {
  partida.puntuacion = nuevaPuntuacion;
};

export const mensajeQueHabriaPasado = (nuevaPuntuacion: number): string => {
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

export const elegirMensaje = (): string => {
  let mensaje = "";
  if (partida.puntuacion <= 4) {
    mensaje = "Has sido muy conservador";
  } else if (partida.puntuacion <= 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (partida.puntuacion < 7.5) {
    mensaje = "Casi casi...";
  } else if (partida.puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena!";
  }
  return mensaje;
};
