/** Class representing a person. */
export class Person {
  /**
   * Create a Person.
   * @param {string} name Name of the person.
   * @param {number} yearOfBirth Year of birth.
   * @param {string} [job=false] - The person's job.
   */
  constructor(name, yearOfBirth, job = false) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  /**
   * Get the person's name
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * Changes the person's job title
   * @param {string} newJob New job title.
   */
  changeJob(newJob) {
    this.job = newJob;
  }

  /**
   * Get the person's job
   * @returns {string} Job status.
   */
  getJob() {
    if (this.job === false) {
      return `${this.name} is unemployed.`;
    }
    return `${this.name} works as a ${this.job}.`;
  }

  /**
   * Calculate the person's approx age
   * @returns {number} Age in years.
   */
  calculateApproxAge() {
    const age = new Date().getFullYear() - this.yearOfBirth;
    return age;
  }

  
}