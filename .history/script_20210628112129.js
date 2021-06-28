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
// console.log(z1.prisitatyk())

// console.log(z1);

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
// console.log(z2);
// console.log(z2.prisitatyk());

//Paveldimumumu

//Automobiliai

//Iprogramuota - lengvai keisti negalim
//isorine biblioteka, kuri 100 metu neatnaujinta, ir truksta funkcionalumo

//tevine klase
class Autombilis {
    constructor(marke) {
        this.marke = marke;
    }

    isveskMarke() {
        return "Autombilio marke" + this.marke;
    }
}

//Susikurti klase, kuri man papildytu Automobilis klase???
//vaikine klase
class Modelis extends Autombilis {
    constructor(marke, modelis, metai) {
        super(marke);
        this.modelis = modelis;
        this.metai = metai;
    }

    static automobilioAmzius() {
        let sidiena = new Date();
        return sidiena.getFullYear() - this.metai;
    }

    parodykMarkeModeli() {
        // parodyto Marke Ir Modelis

        return this.isveskMarke() + " " + this.modelis + " " + automobilioAmzius();  
    }
}

let automobilis = new Autombilis("VW");
console.log(automobilis);

let auto1 = new Modelis("VW", "Passat", 1994);

console.log(auto1);

console.log(auto1.parodykMarkeModeli());
console.log(auto1.isveskMarke());

// Nenoriu
// console.log(auto1.automobilioAmzius());

