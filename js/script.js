// Creo l array di bici sotto forma di oggetti
const bikes = [
  { nome: 'Bianchi', peso: 8 },
  { nome: 'Trek', peso: 7 },
  { nome: 'Specialized', peso: 6 },
  { nome: 'Cannondale', peso: 9 },
];

// le scorro per trovare l a meno pesante
let lightestBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
  const { peso } = bikes[i];
  if (peso < lightestBike.peso) {
    lightestBike = bikes[i];
  }
}

// stampo la bici con template
console.log(`La bici più leggera è ${lightestBike.nome} con un peso di ${lightestBike.peso} kg`);
