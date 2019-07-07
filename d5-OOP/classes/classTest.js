class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = '-@-.com'
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  speak() {
    console.log(`I am speaking like a`, this.constructor.name)
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio() {
    return `"I'm a student at Lighthouse Labs ${super.bio()}`
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

const mike = new Student('mike', 'mikeness');
mike.speak();

console.log(mike.bio())