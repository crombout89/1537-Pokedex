export const pokemon = [
  {
    _id: "001",
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    generation: 1,
    height: 0.7,
    weight: 6.9,
    baseStats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    },
    evolutions: ["Ivysaur", "Venusaur"],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "004",
    name: "Charmander",
    type: ["Fire"],
    generation: 1,
    height: 0.6,
    weight: 8.5,
    baseStats: {
      hp: 39,
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
    },
    evolutions: ["Charmeleon", "Charizard"],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "007",
    name: "Squirtle",
    type: ["Water"],
    generation: 1,
    height: 0.5,
    weight: 9.0,
    baseStats: {
      hp: 44,
      attack: 48,
      defense: 65,
      specialAttack: 50,
      specialDefense: 64,
      speed: 43,
    },
    evolutions: ["Wartortle", "Blastoise"],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "025",
    name: "Pikachu",
    type: ["Electric"],
    generation: 1,
    height: 0.4,
    weight: 6.0,
    baseStats: {
      hp: 35,
      attack: 55,
      defense: 40,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
    evolutions: ["Raichu"],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "143",
    name: "Snorlax",
    type: ["Normal"],
    generation: 1,
    height: 2.1,
    weight: 460.0,
    baseStats: {
      hp: 160,
      attack: 110,
      defense: 65,
      specialAttack: 65,
      specialDefense: 110,
      speed: 30,
    },
    evolutions: [],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "133",
    name: "Eevee",
    type: ["Normal"],
    generation: 1,
    height: 0.3,
    weight: 6.5,
    baseStats: {
      hp: 55,
      attack: 55,
      defense: 50,
      specialAttack: 45,
      specialDefense: 65,
      speed: 55,
    },
    evolutions: [
      "Vaporeon",
      "Jolteon",
      "Flareon",
      "Espeon",
      "Umbreon",
      "Leafeon",
      "Glaceon",
      "Sylveon",
    ],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "152",
    name: "Chikorita",
    type: ["Grass"],
    generation: 2,
    height: 0.9,
    weight: 6.4,
    baseStats: {
      hp: 45,
      attack: 49,
      defense: 65,
      specialAttack: 49,
      specialDefense: 65,
      speed: 45,
    },
    evolutions: ["Bayleef", "Meganium"],
    legendary: false,
    region: "Johto",
  },
  {
    _id: "155",
    name: "Cyndaquil",
    type: ["Fire"],
    generation: 2,
    height: 0.5,
    weight: 7.9,
    baseStats: {
      hp: 39,
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
    },
    evolutions: ["Quilava", "Typhlosion"],
    legendary: false,
    region: "Johto",
  },
  {
    _id: "158",
    name: "Totodile",
    type: ["Water"],
    generation: 2,
    height: 0.6,
    weight: 9.5,
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 64,
      specialAttack: 44,
      specialDefense: 48,
      speed: 43,
    },
    evolutions: ["Croconaw", "Feraligatr"],
    legendary: false,
    region: "Johto",
  },
  {
    _id: "252",
    name: "Treecko",
    type: ["Grass"],
    generation: 3,
    height: 0.5,
    weight: 5.0,
    baseStats: {
      hp: 40,
      attack: 45,
      defense: 35,
      specialAttack: 65,
      specialDefense: 55,
      speed: 70,
    },
    evolutions: ["Grovyle", "Sceptile"],
    legendary: false,
    region: "Hoenn",
  },
  {
    _id: "255",
    name: "Torchic",
    type: ["Fire"],
    generation: 3,
    height: 0.4,
    weight: 2.5,
    baseStats: {
      hp: 45,
      attack: 60,
      defense: 40,
      specialAttack: 70,
      specialDefense: 50,
      speed: 45,
    },
    evolutions: ["Combusken", "Blaziken"],
    legendary: false,
    region: "Hoenn",
  },
  {
    _id: "258",
    name: "Mudkip",
    type: ["Water"],
    generation: 3,
    height: 0.4,
    weight: 7.6,
    baseStats: {
      hp: 50,
      attack: 70,
      defense: 50,
      specialAttack: 50,
      specialDefense: 50,
      speed: 40,
    },
    evolutions: ["Marshtomp", "Swampert"],
    legendary: false,
    region: "Hoenn",
  },
  {
    _id: "387",
    name: "Turtwig",
    type: ["Grass"],
    generation: 4,
    height: 0.4,
    weight: 10.2,
    baseStats: {
      hp: 55,
      attack: 68,
      defense: 64,
      specialAttack: 45,
      specialDefense: 55,
      speed: 31,
    },
    evolutions: ["Grotle", "Torterra"],
    legendary: false,
    region: "Sinnoh",
  },
  {
    _id: "390",
    name: "Chimchar",
    type: ["Fire"],
    generation: 4,
    height: 0.5,
    weight: 6.2,
    baseStats: {
      hp: 44,
      attack: 58,
      defense: 44,
      specialAttack: 58,
      specialDefense: 44,
      speed: 61,
    },
    evolutions: ["Monferno", "Infernape"],
    legendary: false,
    region: "Sinnoh",
  },
  {
    _id: "393",
    name: "Piplup",
    type: ["Water"],
    generation: 4,
    height: 0.4,
    weight: 5.2,
    baseStats: {
      hp: 53,
      attack: 51,
      defense: 53,
      specialAttack: 61,
      specialDefense: 56,
      speed: 40,
    },
    evolutions: ["Prinplup", "Empoleon"],
    legendary: false,
    region: "Sinnoh",
  },
  {
    _id: "495",
    name: "Snivy",
    type: ["Grass"],
    generation: 5,
    height: 0.6,
    weight: 8.1,
    baseStats: {
      hp: 45,
      attack: 45,
      defense: 55,
      specialAttack: 45,
      specialDefense: 55,
      speed: 63,
    },
    evolutions: ["Servine", "Serperior"],
    legendary: false,
    region: "Unova",
  },
  {
    _id: "498",
    name: "Tepig",
    type: ["Fire"],
    generation: 5,
    height: 0.5,
    weight: 9.8,
    baseStats: {
      hp: 65,
      attack: 63,
      defense: 45,
      specialAttack: 45,
      specialDefense: 45,
      speed: 45,
    },
    evolutions: ["Pignite", "Emboar"],
    legendary: false,
    region: "Unova",
  },
  {
    _id: "501",
    name: "Oshawott",
    type: ["Water"],
    generation: 5,
    height: 0.5,
    weight: 5.9,
    baseStats: {
      hp: 55,
      attack: 55,
      defense: 45,
      specialAttack: 63,
      specialDefense: 45,
      speed: 45,
    },
    evolutions: ["Dewott", "Samurott"],
    legendary: false,
    region: "Unova",
  },
  {
    _id: "650",
    name: "Chespin",
    type: ["Grass"],
    generation: 6,
    height: 0.4,
    weight: 9.0,
    baseStats: {
      hp: 56,
      attack: 61,
      defense: 65,
      specialAttack: 48,
      specialDefense: 45,
      speed: 38,
    },
    evolutions: ["Quilladin", "Chesnaught"],
    legendary: false,
    region: "Kalos",
  },
  {
    _id: "653",
    name: "Fennekin",
    type: ["Fire"],
    generation: 6,
    height: 0.4,
    weight: 9.4,
    baseStats: {
      hp: 40,
      attack: 45,
      defense: 40,
      specialAttack: 62,
      specialDefense: 60,
      speed: 60,
    },
    evolutions: ["Braixen", "Delphox"],
    legendary: false,
    region: "Kalos",
  },
  {
    _id: "656",
    name: "Froakie",
    type: ["Water"],
    generation: 6,
    height: 0.3,
    weight: 7.0,
    baseStats: {
      hp: 41,
      attack: 56,
      defense: 40,
      specialAttack: 62,
      specialDefense: 44,
      speed: 71,
    },
    evolutions: ["Frogadier", "Greninja"],
    legendary: false,
    region: "Kalos",
  },
  {
    _id: "722",
    name: "Rowlet",
    type: ["Grass", "Flying"],
    generation: 7,
    height: 0.3,
    weight: 1.5,
    baseStats: {
      hp: 68,
      attack: 55,
      defense: 55,
      specialAttack: 50,
      specialDefense: 50,
      speed: 42,
    },
    evolutions: ["Dartrix", "Decidueye"],
    legendary: false,
    region: "Alola",
  },
  {
    _id: "725",
    name: "Litten",
    type: ["Fire"],
    generation: 7,
    height: 0.4,
    weight: 4.3,
    baseStats: {
      hp: 45,
      attack: 65,
      defense: 40,
      specialAttack: 60,
      specialDefense: 40,
      speed: 70,
    },
    evolutions: ["Torracat", "Incineroar"],
    legendary: false,
    region: "Alola",
  },
  {
    _id: "728",
    name: "Popplio",
    type: ["Water"],
    generation: 7,
    height: 0.4,
    weight: 7.5,
    baseStats: {
      hp: 50,
      attack: 54,
      defense: 54,
      specialAttack: 66,
      specialDefense: 56,
      speed: 40,
    },
    evolutions: ["Brionne", "Primarina"],
    legendary: false,
    region: "Alola",
  },
  {
    _id: "810",
    name: "Grookey",
    type: ["Grass"],
    generation: 8,
    height: 0.3,
    weight: 5.0,
    baseStats: {
      hp: 50,
      attack: 65,
      defense: 50,
      specialAttack: 40,
      specialDefense: 40,
      speed: 65,
    },
    evolutions: ["Thwackey", "Rillaboom"],
    legendary: false,
    region: "Galar",
  },
  {
    _id: "813",
    name: "Scorbunny",
    type: ["Fire"],
    generation: 8,
    height: 0.3,
    weight: 4.5,
    baseStats: {
      hp: 50,
      attack: 71,
      defense: 40,
      specialAttack: 40,
      specialDefense: 40,
      speed: 69,
    },
    evolutions: ["Raboot", "Cinderace"],
    legendary: false,
    region: "Galar",
  },
  {
    _id: "816",
    name: "Sobble",
    type: ["Water"],
    generation: 8,
    height: 0.3,
    weight: 4.0,
    baseStats: {
      hp: 50,
      attack: 40,
      defense: 40,
      specialAttack: 70,
      specialDefense: 40,
      speed: 70,
    },
    evolutions: ["Drizzile", "Inteleon"],
    legendary: false,
    region: "Galar",
  },
  {
    _id: "906",
    name: "Sprigatito",
    type: ["Grass"],
    generation: 9,
    height: 0.4,
    weight: 4.1,
    baseStats: {
      hp: 40,
      attack: 61,
      defense: 54,
      specialAttack: 45,
      specialDefense: 45,
      speed: 65,
    },
    evolutions: ["Floragato", "Meowscarada"],
    legendary: false,
    region: "Paldea",
  },
  {
    _id: "909",
    name: "Fuecoco",
    type: ["Fire"],
    generation: 9,
    height: 0.4,
    weight: 9.8,
    baseStats: {
      hp: 67,
      attack: 45,
      defense: 59,
      specialAttack: 63,
      specialDefense: 40,
      speed: 36,
    },
    evolutions: ["Crocalor", "Skeledirge"],
    legendary: false,
    region: "Paldea",
  },
  {
    _id: "912",
    name: "Quaxly",
    type: ["Water"],
    generation: 9,
    height: 0.5,
    weight: 6.1,
    baseStats: {
      hp: 55,
      attack: 60,
      defense: 39,
      specialAttack: 42,
      specialDefense: 39,
      speed: 70,
    },
    evolutions: ["Quaxwell", "Quaquaval"],
    legendary: false,
    region: "Paldea",
  },
  {
    _id: "003",
    name: "Venusaur",
    type: ["Grass", "Poison"],
    generation: 1,
    height: 2.0,
    weight: 100.0,
    baseStats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
    evolutions: [],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "006",
    name: "Charizard",
    type: ["Fire", "Flying"],
    generation: 1,
    height: 1.7,
    weight: 90.5,
    baseStats: {
      hp: 78,
      attack: 84,
      defense: 78,
      specialAttack: 109,
      specialDefense: 85,
      speed: 100,
    },
    evolutions: [],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "009",
    name: "Blastoise",
    type: ["Water"],
    generation: 1,
    height: 1.6,
    weight: 85.5,
    baseStats: {
      hp: 79,
      attack: 83,
      defense: 100,
      specialAttack: 85,
      specialDefense: 105,
      speed: 78,
    },
    evolutions: [],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "149",
    name: "Dragonite",
    type: ["Dragon", "Flying"],
    generation: 1,
    height: 2.2,
    weight: 210.0,
    baseStats: {
      hp: 91,
      attack: 134,
      defense: 95,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
    evolutions: [],
    legendary: false,
    region: "Kanto",
  },
  {
    _id: "150",
    name: "Mewtwo",
    type: ["Psychic"],
    generation: 1,
    height: 2.0,
    weight: 122.0,
    baseStats: {
      hp: 106,
      attack: 110,
      defense: 90,
      specialAttack: 154,
      specialDefense: 90,
      speed: 130,
    },
    evolutions: [],
    legendary: true,
    region: "Kanto",
  },
  {
    _id: "249",
    name: "Lugia",
    type: ["Psychic", "Flying"],
    generation: 2,
    height: 5.2,
    weight: 216.0,
    baseStats: {
      hp: 106,
      attack: 90,
      defense: 130,
      specialAttack: 90,
      specialDefense: 154,
      speed: 110,
    },
    evolutions: [],
    legendary: true,
    region: "Johto",
  },
  {
    _id: "384",
    name: "Rayquaza",
    type: ["Dragon", "Flying"],
    generation: 3,
    height: 7.0,
    weight: 206.5,
    baseStats: {
      hp: 105,
      attack: 150,
      defense: 90,
      specialAttack: 150,
      specialDefense: 90,
      speed: 95,
    },
    evolutions: [],
    legendary: true,
    region: "Hoenn",
  },
  {
    _id: "483",
    name: "Dialga",
    type: ["Steel", "Dragon"],
    generation: 4,
    height: 5.4,
    weight: 683.0,
    baseStats: {
      hp: 100,
      attack: 120,
      defense: 120,
      specialAttack: 150,
      specialDefense: 100,
      speed: 90,
    },
    evolutions: [],
    legendary: true,
    region: "Sinnoh",
  },
  {
    _id: "493",
    name: "Arceus",
    type: ["Normal"],
    generation: 4,
    height: 3.2,
    weight: 320.0,
    baseStats: {
      hp: 120,
      attack: 120,
      defense: 120,
      specialAttack: 120,
      specialDefense: 120,
      speed: 120,
    },
    evolutions: [],
    legendary: true,
    region: "Sinnoh",
  },
];
