/** @constant {number} */
const MaxPopulation = 1000000000;

/**
 * calculates the remaining population capacity.
 * @param {number} currentPop Current population.
 * @returns {number}
 */
function remainingPopCapacity(currentPop){
    return MaxPopulation - currentPop;
}

module.exports = {
    MaxPopulation,
    remainingPopCapacity
}