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

    tevinisMetodas() {
        return "tevinisMetodas is Autombilis";
    }

    static statinisMetodas() {
        return "labas, atejau is Autombilis";
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

    static automobilioAmzius(metai1) {
        let sidiena = new Date();
        return sidiena.getFullYear() - metai1;
    }

    parodykMarkeModeli() {
        // parodyto Marke Ir Modelis

        //Autombilis        
        // return this.isveskMarke() + " " + this.modelis + this.automobilioAmzius(this.metai);  
        return this.isveskMarke() + " " + this.modelis + Modelis.automobilioAmzius(this.metai) + " " + Autombilis.statinisMetodas();  
    }

    tevinisMetodas() {
        return "Galbut veikiantis metodas"; //????
    }

}

let automobilis = new Autombilis("VW");
console.log(automobilis);

let auto1 = new Modelis("VW", "Passat", 1994);

console.log(auto1);

console.log(auto1.parodykMarkeModeli());
console.log(auto1.isveskMarke());

//metodas per objekta - neveiks
// console.log(auto1.automobilioAmzius(1994))
//metodas per klase - veiks
console.log(Modelis.automobilioAmzius(1994));


// Nenoriu
// console.log(auto1.automobilioAmzius());


//erroras
//pirmas variantas
//antras variantas
console.log(auto1.tevinisMetodas());

console.log(automobilis.tevinisMetodas());


///// Grupe su 5 mokiniais.

class Grupe {
    constructor(pavadinimas, trukme ) {
        this.pavadinimas = pavadinimas;
        this.trukme = trukme;
    }
}

class Mokinys extends Grupe {
       constructor(pavadinimas, trukme, vardas, pavarde, pazymiai, lankomumas) {
            super(pavadinimas);
            super(trukme);
            this.vardas = vardas;
            this.pavarde = pavarde;
       } 
}
