let puntuacion: number = 0;

const muestraPuntuacion = (puntuacion: number) => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Puntuación actual: ${puntuacion}`;
  }
};

const dameCarta = () => {
  const numeroCarta = generarNumeroAleatorio();
  console.log(numeroCarta);
  mostrarCarta(numeroCarta);
  sumarPuntuacion(numeroCarta);
  muestraPuntuacion(puntuacion);
};

const sumarPuntuacion = (numeroCarta: number): number => {
  puntuacion += numeroCarta;
  return puntuacion;
};

const generarNumeroAleatorio = () => {
  let numero: number = Math.floor(Math.random() * 10) + 1;
  if (numero > 7) {
    return numero + 2;
  } else {
    return numero;
  }
};

const mostrarCarta = (carta: number): void => {
  const elementoCarta = document.getElementById("carta");

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
    }
  }
};

const botonDameCarta = document.getElementById("dame-carta");
botonDameCarta?.addEventListener("click", dameCarta);
