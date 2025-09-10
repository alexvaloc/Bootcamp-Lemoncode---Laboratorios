let puntuacion: number = 0;
const BACK_CARD_URL =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
/*nos aseguramos de que el DOM está cargado */
document.addEventListener("DOMContentLoaded", () => {
  const elementoMensaje = document.getElementById("mensaje");
  const elementoPuntuacion = document.getElementById("puntuacion");
  const botonReiniciar = document.getElementById("botonReiniciar");
  const botonDameCarta = document.getElementById("dame-carta");
  const botonPlantarse = document.getElementById("botonPlantarse");
  const elementoCarta = document.getElementById("carta");

  const muestraPuntuacion = (puntuacion: number): void => {
    if (elementoPuntuacion) {
      elementoPuntuacion.innerHTML = `Puntuación actual: ${puntuacion}`;
    }
  };

  const generarNumeroAleatorio = (): number => {
    const numero: number = Math.floor(Math.random() * 10) + 1;
    return numero > 7 ? numero + 2 : numero;
  };

  const dameCarta = (): void => {
    const numeroCarta = generarNumeroAleatorio();
    console.log("Carta: ", numeroCarta);
    mostrarCarta(numeroCarta);
    if (numeroCarta > 7) {
      sumarPuntuacion(0.5);
    } else {
      sumarPuntuacion(numeroCarta);
    }
    muestraPuntuacion(puntuacion);
    if (puntuacion > 7.5) {
      gestionarGameOver();
    }
  };

  const sumarPuntuacion = (numeroCarta: number): number => {
    puntuacion += numeroCarta;
    return puntuacion;
  };

  const deshabilitarBotones = (): void => {
    if (
      botonDameCarta &&
      botonDameCarta instanceof HTMLButtonElement &&
      botonPlantarse &&
      botonPlantarse instanceof HTMLButtonElement
    ) {
      botonDameCarta.disabled = true;
      botonPlantarse.disabled = true;
    }
  };

  const habilitarBotones = (): void => {
    if (
      botonDameCarta &&
      botonDameCarta instanceof HTMLButtonElement &&
      botonPlantarse &&
      botonPlantarse instanceof HTMLButtonElement
    ) {
      botonDameCarta.disabled = false;
      botonPlantarse.disabled = false;
    }
  };

  const mostrarBotonReiniciar = (): void => {
    if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
      botonReiniciar.hidden = false;
    }
  };

  const plantarse = (): void => {
    if (elementoMensaje) {
      if (puntuacion <= 4) {
        elementoMensaje.innerHTML = "Has sido muy conservador";
      } else if (puntuacion <= 5) {
        elementoMensaje.innerHTML = "Te ha entrado el canguelo eh?";
      } else if (puntuacion < 7.5) {
        elementoMensaje.innerHTML = "Casi casi...";
      } else if (puntuacion === 7.5) {
        elementoMensaje.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
      }
    }
    deshabilitarBotones();
    mostrarBotonReiniciar();
  };

  const gestionarGameOver = (): void => {
    if (elementoMensaje) {
      elementoMensaje.innerHTML = `UY! Te has pasado de 7,5... has perdido :(`;
    }
    deshabilitarBotones();
    mostrarBotonReiniciar();
  };

  const reset = (): void => {
    puntuacion = 0;
    if (elementoMensaje && elementoPuntuacion) {
      elementoMensaje.innerHTML = "";
      elementoPuntuacion.innerHTML = "";
    }
    if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
      elementoCarta.src = BACK_CARD_URL;
    }
    if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
      botonReiniciar.hidden = true;
    }
    habilitarBotones();
  };
  const mostrarCarta = (carta: number): void => {
    if (elementoCarta && elementoCarta instanceof HTMLImageElement) {
      switch (carta) {
        case 1:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
          break;
        case 2:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
          break;
        case 3:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
          break;
        case 4:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
          break;
        case 5:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
          break;
        case 6:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
          break;
        case 7:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
          break;
        case 10:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
          break;
        case 11:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
          break;
        case 12:
          elementoCarta.src =
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
          break;
        default:
          elementoCarta.src = BACK_CARD_URL;
      }
    }
  };

  botonDameCarta?.addEventListener("click", dameCarta);
  botonPlantarse?.addEventListener("click", plantarse);
  botonReiniciar?.addEventListener("click", reset);
});
