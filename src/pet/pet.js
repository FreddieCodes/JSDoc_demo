/** Class representing a pet */
export class Pet {
    /**
     * Create a Pet.
     * @param {string} name Name of the pet.
     * @param {string} species Species of the pet.
     * @param {number} loyalty Loyalty of the pet (0-10, 10 being the most loyal).
     * @param {string} noise Noise pet makes.
     */
    constructor(name, species, loyalty, noise){
        this.name;
        this.species;
        this.loyalty;
        this.noise     
    }

    /**
    * Get the pet's name
    * @returns {string} The pet's name.
    */
    getName() {
        return this.name;
    }

    /**
    * Get the pet's species
    * @returns {string} The pet's species.
    */
    getSpecies() {
        return this.species;
    }

    /**
    * Tell the pet to make noise
    * @returns {string} The noise of pet.
    */
    makeNoise() {
        console.log(this.noise);
    }

    /**
     * Compares whether two pets are the same species.
     * @param {Pet} pet1 The first pet.
     * @param {Pet} pet2 The second pet.
     * @returns {bool} The result of the comparison.
     */
    static comparePetSpecies(pet1, pet2){
        let result = pet1.species === pet2.species;
        return result;
    }
}

