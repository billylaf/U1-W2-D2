/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 10;
const b = 5;
if (a > b) {
  console.log("a e piu grande");
} else {
  console.log("b e piu grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 44;
if (x !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let aa = 200;
if (aa % 20 === 0) {
  console.log("DIVISIBILE PER 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const xx = 3;
const yy = 5;
if (xx === 8 || yy === 8 || xx + yy === 8) {
  console.log("OTTIMO ");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 54;
if (totalShoppingCart > 50) {
  console.log("SEI IDONEO ALLA SPEDIZIONE GRATUITA");
} else {
  console.log(
    "NON SEI IDONEO ALLA SPEDIONE GRATUITTA, totale da pagare:",
    totalShoppingCart + 10,
  );
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalCart = 50;
const discount = (totalCart * 20) / 100;
const totalprize = totalCart - discount;
if (totalprize > 50) {
  console.log("SEI IDONEO ALLA SPEDIZIONE GRATUITA");
} else {
  console.log(
    "NON SEI IDONEO ALLA SPEDIONE GRATUITTA, totale da pagare:",
    totalprize + 10,
  );
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 4;
let var2 = 10;
let var3 = 9;

let first;
let second;
let third;

if (var1 > var2 && var1 > var3) {
  first = var1;

  if (var2 > var3) {
    second = var2;
    third = var3;
  } else {
    second = var3;
    third = var2;
  }
} else if (var2 > var1 && var2 > var3) {
  first = var2;

  if (var1 > var3) {
    second = var1;
    third = var3;
  } else {
    second = var3;
    third = var1;
  }
} else {
  first = var3;

  if (var1 > var2) {
    second = var1;
    third = var2;
  } else {
    second = var2;
    third = var1;
  }
}
console.log(first, second, third);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let tipo = "28";
if (typeof tipo === "number") {
  console.log("OTTIMO");
} else {
  console.log("NO BONO");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 10;
if (number % 2 === 0) {
  console.log("il numero e pari");
} else {
  console.log("il numero e dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 1;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.splice(2, 1);
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const arr = [];
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[9] = 100;
console.log(arr);
