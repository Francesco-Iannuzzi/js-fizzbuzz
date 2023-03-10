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

//creare un container nell'index.html e salvarlo nello script in una variante
const rowElement = document.querySelector('.row');

//creare un ciclo di numeri che va da 1 a 100 e stamparli in console
for (let i = 1; i <= 100; i++) {

        //verificare se il numero è sia un multiplo di 3 che di 5 usando gli operatori % e && e stampare al suo posto la stringa 'FizzBuzz'
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
        //stampare in dom in ordine i vari numeri e stringhe
        let colElement = document.createElement('div');
        colElement.innerHTML = `FizzBuzz`;
        rowElement.append(colElement);

        //assegnare delle classi che stilizzino i vari elementi
        colElement.classList.add('col-2', 'my_bg_fizzbuzz', 'square');
        

        //verificare se il numero è un multiplo di 5 usando l'operatore % e stampare al suo posto la stringa 'Buzz'
    } else if (i % 5 === 0) {
        console.log('Buzz');
        //stampare in dom in ordine i vari numeri e stringhe
        const colElement = document.createElement('div');
        colElement.innerHTML = `Buzz`;
        rowElement.append(colElement);

        //assegnare delle classi che stilizzino i vari elementi
        colElement.classList.add('col-2', 'my_bg_buzz', 'square');
        

        //verificare se il numero è un multiplo di 3 usando l'operatore % e stampare al suo posto la stringa 'Fizz'
    } else if (i % 3 === 0) {
        console.log('Fizz');
        //stampare in dom in ordine i vari numeri e stringhe
        const colElement = document.createElement('div');
        colElement.innerHTML = `Fizz`;
        rowElement.append(colElement);

        //assegnare delle classi che stilizzino i vari elementi
        colElement.classList.add('col-2', 'my_bg_fizz', 'square');
        

        //altrimenti stampare semplicemente il numero
    } else {
        console.log(i);
        //stampare in dom in ordine i vari numeri e stringhe
        const colElement = document.createElement('div');
        colElement.innerHTML = `${i}`;
        rowElement.append(colElement);

        //assegnare delle classi che stilizzino i vari elementi
        colElement.classList.add('col-2', 'my_bg_number', 'square');
   
    }

}