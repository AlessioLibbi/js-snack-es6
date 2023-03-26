// Creo l array di bici sotto forma di oggetti
const bikes = [
  { nome: 'Bianchi', peso: 8 },
  { nome: 'Trek', peso: 7 },
  { nome: 'Specialized', peso: 6 },
  { nome: 'Cannondale', peso: 9 },
];

// le scorro per trovare la meno pesante
let lightestBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
  const { peso } = bikes[i];
  if (peso < lightestBike.peso) {
    lightestBike = bikes[i];
  }
}

// stampo la bici con template
console.log(`La bici più leggera è ${lightestBike.nome} con un peso di ${lightestBike.peso} kg`);




// SNACK DUE ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// Creo 1 array di squadre sotto forma di oggetti
const squadre = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
  ];
  
  // Genero i numeri
  for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 100) + 1;
    squadre[i].falliSubiti = Math.floor(Math.random() * 50) + 1;
  }
  
  // Creo un nuovo array 
  const squadreFalliSubiti = [];
  for (let i = 0; i < squadre.length; i++) {
    const { nome, falliSubiti } = squadre[i];
    squadreFalliSubiti.push({ nome, falliSubiti });
  }
  
  // Stampo tutto in console
  console.log('Squadre:', squadre);
  console.log('Squadre con falli subiti:', squadreFalliSubiti);
