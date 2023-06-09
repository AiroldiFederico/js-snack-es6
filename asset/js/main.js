/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

*/



//-----------------------------------------------------------
// SNACK 1



let Biciclette = [
  {
    nome: 'BMX',
    peso: 30,
  },
  {
    nome: 'Mountainbike',
    peso: 35,
  },
  {
    nome: 'Trial',
    peso: 25,
  },
  {
    nome: 'Monociclo',
    peso: 10,
  },
  {
    nome: 'ElectricBike',
    peso: 85,
  }
];

let div = document.querySelector('div');


function minorPeso() {
  
  let pesoMinore = Biciclette[0];
  
  Biciclette.forEach(element => {
    
    const {nome, peso} = element;

    if(element.peso < pesoMinore.peso) {
      pesoMinore = element;
    }
  });

  return pesoMinore;
}



let biciLeggera = minorPeso();
console.log(biciLeggera);


div.innerHTML = `

<p> LA BICI PIÙ LEGGERA È: </p>
<p> ${biciLeggera.nome} e pesa ${biciLeggera.peso}Kg </p>

`



//-----------------------------------------------------------
// SNACK 2

let squadre = [
  {nome: 'blu', puntiFatti: 0, falliSubiti: 0},
  {nome: 'rosso', puntiFatti: 0, falliSubiti: 0},
  {nome: 'verde', puntiFatti: 0, falliSubiti: 0},
  {nome: 'giallo', puntiFatti: 0, falliSubiti: 0},
  {nome: 'viola', puntiFatti: 0, falliSubiti: 0},
  {nome: 'marrone', puntiFatti: 0, falliSubiti: 0},
];



squadre.forEach(squadra => {
  squadra.puntiFatti = Math.floor(Math.random() * 100);
  squadra.falliSubiti = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
});


console.log(squadre);


let squadre2 = squadre.map(element => {
  let {nome, falliSubiti} = element;
  return {nome: element.nome, falliSubiti: element.falliSubiti};
});

console.log(squadre2);


//-----------------------------------------------------------
// SNACK 3

let nomi = ['alberto', 'michele', 'angelo', 'simone', 'francesco', 'federico'];

function filterArray(array, a, b) {
  let nomi2 = array.filter((element, index) => {
    return index > a && index < b;
  });
  return nomi2;
}


let nomiFiltrati = filterArray(nomi, 1, 4);

console.log(nomiFiltrati);