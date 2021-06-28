"use strict";



//ES5

//Konstruktoriaus funkcija
function Zmogus (vardas, pavarde) {
    
    //properties - vidiniai objekto kintamieji
    this.vardas = vardas;
    this.pavarde = pavarde;

    //metodus 
    this.prisitatyk = function() {
        return this.vardas + " " + this.pavarde;
    }

}


let z1 = new Zmogus("Vardas", "Pavarde");
console.log(z1.prisitatyk())

console.log(z1);

// ES6 klases - sablonas kurti objektams

class ZmogausKlase {

    constructor(vardas, pavarde) {
        this.vardas = vardas;
        this.pavarde = pavarde;
    }

    prisitatyk() {
        return this.vardas + " " + this.pavarde;
    }
}


let z2 = new ZmogausKlase("vardas1","pavarde1");
console.log(z2);
console.log(z2.prisitatyk());