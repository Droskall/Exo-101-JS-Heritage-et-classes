class Vehicule {

    constructor(couleur, roues, marque) {
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }
    demarrer() {
        console.log("Demarer");
    }
    arreter() {
        console.log("Arreter")
    }
}

class Velo extends Vehicule {

    constructor(couleur, roues, marque, rayonRoues, typePeinture) {
        super(couleur, roues, marque);
        this.rayonRoues = rayonRoues;
        this.typePeinture = typePeinture;
    }

    monter() {
        console.log("Je monte sur le vélo");
    }
}

class Voiture extends Vehicule {
    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque);
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }

    passerAuCarWash() {
        console.log("laver");
    }
}

let BMX = new Velo("rouge", "2", "BMX", "40", "chrome");
BMX.monter();