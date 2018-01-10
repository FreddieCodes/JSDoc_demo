import { Person } from "../person/person";

/** Class representing a pet */
export class Pet {
    /**
     * Create a Pet.
     * @param {string} name 
     * @param {string} species 
     * @param {number} loyalty 
     * @param {string} noise
     */
    constructor(name, species, loyalty, noise){
        this.name;
        this.species;
        this.loyalty;
        this.noise     
    }

    /**
    * Get the pet's name
    * @returns {string}
    */
    getName() {
        return this.name;
    }

    /**
    * Get the pet's species
    * @returns {string}
    */
    getSpecies() {
        return this.species;
    }

    makeNoise() {
        console.log(this.noise);
    }

}

