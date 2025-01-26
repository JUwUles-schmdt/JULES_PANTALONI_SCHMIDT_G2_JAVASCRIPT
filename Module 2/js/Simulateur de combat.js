class personnage{
    constructor(nom, pv, attaque, pp){
        this.nom = nom;
        this.pv = pv;
        this.attaque = attaque;
        this.pp = pp;
    }

    Precision(){
        if (Math.random()<=this.pp){
            return true;
        }
    }
}

let guerrier = new personnage("Pantheon", 10, 3, 0.7, false)
let lion = new personnage("Warwick", 8, 3, 0.8, false)

while (guerrier.pv > 0 && lion.pv > 0){
    if (Math.random > 0.5){
        guerrier.canAttack;
        if (guerrier.canAttack=true) {
            lion.pv= lion.pv-guerrier.attaque;
        }
    }
    else {
        lion.canAttack;
        if (lion.Precision) {
            guerrier.pv= guerrier.pv-lion.attaque;
        }
    }
}

if (guerrier.pv > lion.pv && guerrier.pv > 0){
    console.log (guerrier.nom +" a gagné")
}
else if (lion.pv >0) {
    console.log (lion.nom + " a gagné")
}
