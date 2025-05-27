

let km = prompt("quanti chilometri vuoi percorrere?")
km = Number(km)

let age = prompt("Quanti anni hai ?")
età = Number(age)

let prezzo = km * 0.21


if (età < 18) {
    prezzo = prezzo * 0.8;
} else if (età > 65) {
    prezzo = prezzo * 0.6;
}

console.log("Il prezzo del biglietto è:" + prezzo.toFixed(2));