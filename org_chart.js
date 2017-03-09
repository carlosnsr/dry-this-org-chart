function Person(name, gender, email, skills) {
  this.name = name;
  this.gender = gender || "Not identified";
  this.email = email || "none";
  this.skills = (skills || []);
}

Person.prototype.hire = function (position, manager, project) {
  this.position = (position || "TBD");
  this.manager = (manager || "TBD");
  this.project = (project || "no current projects");
}

Person.prototype.train = function (skill) {
  this.skills.push(skill)
}

Person.prototype.describe = function () {
  if (this.gender === "male") {
    console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
    console.log(`He can be reached at ${this.email}.`)
  }
  else if (this.gender === "female") {
    console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
    console.log(`She can be reached at ${this.email}.`)
  }
  else {
    console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
    console.log(`${this.name} can be reached at ${this.email}.`)
  }
}

let elon = new Person("Elon Musk", "male", "elon.musk@musky.com");
let alan = new Person("Alan Turing", "male", "alan.turing@musky.com");
let grace = new Person("Grace Hopper", "female", "grace.hopper@musky.com");
let donald = new Person("Donald Knuth", "male", "donald.knuth@musky.com")

elon.hire("Boss", "none");
alan.hire("Computer Scientist", elon.name, "Cryptography");
grace.hire("Computer Scientist", elon.name, "Compilers");
donald.hire("Mathematician", elon.name, "Algorithm Analysis");

alan.train("Mathematics");
grace.train("Cobol");
donald.train("Computational Complexity");

let tim = new Person("Tim Berners-Lee", "male", "tim.berners_lee@musky.com");
tim.hire("Computer Scientist", elon.name, "Networks");
tim.train("Protocols");

elon.describe();
alan.describe();
grace.describe();
donald.describe();
tim.describe();
