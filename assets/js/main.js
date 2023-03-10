/*

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz”
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?

Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
3. Facciamo attenzione all'ordine delle condizioni che usiamo

BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
- `append()` oppure
- `.innerHTML`
- `.insertAdjacentHTML()`
A voi la scelta

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/


/*

Strumenti:
- const / let
- for
- if /else
- operator %
- operator &&
- getElementById / querySelector
- `append()` / `innerHTML` / `insertAdjacentHTML`
*/

const containerEl = document.querySelector('.container');

//creare un ciclo di numeri che va da 1 a 100 e stamparli in console
for (let i = 1; i <= 100; i++) {

    //verificare se il numero è sia un multiplo di 3 che di 5 usando gli operatori % e && e stampare al suo posto la stringa 'FizzBuzz'
    //verificare se il numero è un multiplo di 3 usando l'operatore % e stampare al suo posto la stringa 'Fizz'
    //verificare se il numero è un multiplo di 5 usando l'operatore % e stampare al suo posto la stringa 'Buzz'
    //altrimenti stampare semplicemente il numero
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
        const liElement = `<li>FizzBuzz</li>`
        containerEl.innerHTML += liElement

    } else if (i % 5 === 0) {
        console.log('Buzz');
        const liElement = `<li>Buzz</li>`;
        containerEl.innerHTML += liElement;

    } else if (i % 3 === 0) {
        console.log('Fizz');
        const liElement = `<li>Fizz</li>`;
        containerEl.innerHTML += liElement;

    } else {
        console.log(i);
        const liElement = `<li>${i}</li>`;
        containerEl.innerHTML += liElement
    }

     

}


//creare un container nell'index.html e stamparci dentro in ordine i vari numeri e stringhe

//assegnare delle classi che stilizzino i vari elementi