"use strict";


//Konstruktoriaus funkcija
function Zmogus (vardas, pavarde) {
    
    //properties - vidiniai objekto kintamieji
    this.vardas = vardas;
    this.pavarde = pavarde;

    //metodus 

    this.prisitatyk = function() {
        return this.vardas + this.pavarde
    }

}


let z1 = new Zmogus("Vardas", "Pavarde");

console.log(z1);