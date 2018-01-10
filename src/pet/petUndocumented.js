export class Pet {

    constructor(name, species, loyalty, noise){
        this.name;
        this.species;
        this.loyalty;
        this.noise     
    }

    getName() {
        return this.name;
    }

    getSpecies() {
        return this.species;
    }

    makeNoise() {
        console.log(this.noise);
    }

    static comparePetSpecies(pet1, pet2){
        let result = pet1.species === pet2.species;
        return result;
    }
}

