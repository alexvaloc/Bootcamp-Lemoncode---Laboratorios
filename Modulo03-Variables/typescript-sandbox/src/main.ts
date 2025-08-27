interface MusicGroup {
  artistName: string;
  yearFounded: number;
  isActive: boolean;
  musicGenre: string;
}

let popRock = "🎵 Pop Rock";
let rock = "🎸 Rock";
let hardRock = "🤘 Hard Rock";
let clasic = "🎼 Clásica";

let style: string = "font-weight: bold; font-size:18px; background-color:green";

const groupOne: MusicGroup = {
  artistName: "The Beatles",
  yearFounded: 1960,
  isActive: true,
  musicGenre: popRock,
};

const groupTwo: MusicGroup = {
  artistName: "Queen",
  yearFounded: 1970,
  isActive: false,
  musicGenre: rock,
};

const groupThree: MusicGroup = {
  artistName: "AC DC",
  yearFounded: 1973,
  isActive: true,
  musicGenre: hardRock,
};

const groupFour: MusicGroup = {
  artistName: "Ludwig van Beethoven",
  yearFounded: 1770,
  isActive: false,
  musicGenre: clasic,
};

const groupFive: MusicGroup = {
  artistName: "The Rolling Stones",
  yearFounded: 1962,
  isActive: true,
  musicGenre: rock,
};

console.log(`%c${groupOne.artistName}`, style);
console.log(
  `Año de fundación: ${groupOne.yearFounded}\nActivo: ${groupOne.isActive}\nGenero musical: ${groupOne.musicGenre}`
);

console.log(`%c${groupTwo.artistName}`, style);
console.log(
  `Año de fundación: ${groupTwo.yearFounded}\nActivo: ${groupTwo.isActive}\nGénero musical: ${groupTwo.musicGenre}`
);

console.log(`%c${groupThree.artistName}`, style);
console.log(
  `Año de fundación: ${groupThree.yearFounded}\nActivo: ${groupThree.isActive}\nGénero musical: ${groupThree.musicGenre}`
);

console.log(`%c${groupFour.artistName}`, style);
console.log(
  `Año de fundación: ${groupFour.yearFounded}\nActivo: ${groupFour.isActive}\nGénero musical: ${groupFour.musicGenre}`
);

console.log(`%c${groupFive.artistName}`, style);
console.log(
  `Año de publicación: ${groupFive.yearFounded}\nActivo: ${groupFive.isActive}\nGénero musical: ${groupFive.musicGenre}`
);
