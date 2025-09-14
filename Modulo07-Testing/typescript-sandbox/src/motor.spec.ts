import {
  generarNumeroAleatorio,
  comprobarNumeroAleatorio,
  obtenerPuntos,
  sumarPuntuacion,
  actualizarPuntuacion,
  elegirMensaje,
} from "./motor";
import { partida, Partida } from "./modelo";
import { vi } from "vitest";

describe("sumarPuntuacion", () => {
  it("suma puntos correctamente a la puntuación existente", () => {
    //Arrange
    const puntos: number = 0.5;
    const p: Partida = { puntuacion: 2 };
    const resultadoEsperado = 2.5;
    //Act
    const resultado: number = sumarPuntuacion(puntos, p);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("funciona con puntuaciones enteras", () => {
    //Arrange
    const puntos: number = 2;
    const p: Partida = { puntuacion: 5 };
    const resultadoEsperado: number = 7;
    //Act
    sumarPuntuacion(2, p);
    const resultado: number = sumarPuntuacion(puntos, p);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("actualizarPuntuacion", () => {
  it("sobrescribe los nuevos puntos a la puntuación inicial", () => {
    //Arrange
    const nuevaPuntuacion: number = 0.5;
    const p: Partida = { puntuacion: 0 };
    const resultadoEsperado = 0.5;
    //Act
    actualizarPuntuacion(nuevaPuntuacion, p);
    //Assert
    expect(p.puntuacion).toBe(resultadoEsperado);
  });

  it("sobrescribe la puntuacion 7 a la puntuación actual === 3", () => {
    //Arrange
    const nuevaPuntuacion: number = 7;
    const p: Partida = { puntuacion: 3 };
    const resultadoEsperado = 7;
    //Act
    actualizarPuntuacion(nuevaPuntuacion, p);
    //Assert
    expect(p.puntuacion).toBe(resultadoEsperado);
  });
  it("sobrescribe a 0 desde una puntuación anterior", () => {
    //Arrange
    const nuevaPuntuacion: number = 0;
    const p: Partida = { puntuacion: 8 };
    const resultadoEsperado = 0;
    //Act
    actualizarPuntuacion(nuevaPuntuacion, p);
    //Assert
    expect(p.puntuacion).toBe(resultadoEsperado);
  });
});

describe("elegirMensaje", () => {
  it("si partida.puntuacion === 4 devuelve 'Has sido muy conservador'", () => {
    //Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(4);
    const resultadoEsperado = "Has sido muy conservador";
    //Act
    const resultado: string = elegirMensaje();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("si partida.puntuacion === 5 devuelve 'Te ha entrado el canguelo eh?'", () => {
    //Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(5);
    const resultadoEsperado = "Te ha entrado el canguelo eh?";
    //Act
    const resultado: string = elegirMensaje();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("si partida.puntuacion === 6.5 devuelve 'Casi casi...'", () => {
    //Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(6.5);
    const resultadoEsperado = "Casi casi...";
    //Act
    const resultado: string = elegirMensaje();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
  it("si partida.puntuacion === 7.5 devuelve '¡Lo has clavado! ¡Enhorabuena!'", () => {
    //Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
    const resultadoEsperado = "¡Lo has clavado! ¡Enhorabuena!";
    //Act
    const resultado: string = elegirMensaje();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

//APARTADOS OPCIONALES

describe("generarNumeroAleatorio", () => {
  it("si Math.random === 0.0, el número aleatorio es 1", () => {
    //Arrange
    const resultadoEsperado: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0.0);
    //Act
    const resultado: number = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("si Math.random === 0.999, el número aleatorio es 10", () => {
    //Arrange
    const resultadoEsperado: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);
    //Act
    const resultado: number = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("si Math.random === 0.45, el número aleatorio es 5", () => {
    //Arrange
    const resultadoEsperado = 5;
    vi.spyOn(global.Math, "random").mockReturnValue(0.45);
    //Act
    const resultado = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("comprobarNumeroAleatorio", () => {
  it("Si la carta es 9, nos devuelve 11 (carta+2)", () => {
    //Arrange
    const numeroCarta: number = 9;
    const resultadoEsperado: number = 11;
    //Act
    const resultado: number = comprobarNumeroAleatorio(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si la carta es 7, nos devuelve 7", () => {
    //Arrange
    const numeroCarta: number = 7;
    const resultadoEsperado: number = 7;
    //Act
    const resultado: number = comprobarNumeroAleatorio(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si la carta es 3, nos devuelve 3", () => {
    //Arrange
    const numeroCarta: number = 3;
    const resultadoEsperado: number = 3;
    //Act
    const resultado: number = comprobarNumeroAleatorio(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si la carta es 8, nos devuelve 10", () => {
    //Arrange
    const numeroCarta: number = 8;
    const resultadoEsperado: number = 10;
    //Act
    const resultado: number = comprobarNumeroAleatorio(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerPuntos", () => {
  it("Si la carta es 9, nos devuelve 0.5", () => {
    //Arrange
    const numeroCarta: number = 9;
    const resultadoEsperado: number = 0.5;
    //Act
    const resultado: number = obtenerPuntos(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si la carta es 7, nos devuelve 7", () => {
    //Arrange
    const numeroCarta: number = 7;
    const resultadoEsperado: number = 7;
    //Act
    const resultado: number = obtenerPuntos(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si la carta es 3, nos devuelve 3", () => {
    //Arrange
    const numeroCarta: number = 3;
    const resultadoEsperado: number = 3;
    //Act
    const resultado: number = obtenerPuntos(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si la carta es 8, nos devuelve 0.5", () => {
    //Arrange
    const numeroCarta: number = 8;
    const resultadoEsperado: number = 0.5;
    //Act
    const resultado: number = obtenerPuntos(numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
