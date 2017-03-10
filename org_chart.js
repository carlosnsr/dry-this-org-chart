function Persons (name, email, position, project, gender) {
  this.name = name;
  this.email = email;
  this.position = position;
  this.project = project;
  this.skills = [];
  this.gender = gender;
}

Persons.prototype.setSkills = function(skill) {
  if (this.skills.indexOf(skill) > -1) {
    console.log(this.name, " does not need training.")
  } else {
    this.skills.push(skill)
  }
}

Persons.prototype.setManager = function(manager) {
  this.manager = manager;
}

Persons.prototype.displayAll = function() {
  var sex;
  var hisHer;
  if (this.gender === 'male') {
    sex = 'He';
    hisHer = 'His'
  } else {
    sex = 'She'
    hisHer = 'Her'
  }
    console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
    console.log(`${sex} can be reached at ${this.email}`)
    console.log(`${hisHer} Skills are: ${this.skills}`)
    console.log(`${hisHer} Manager is ${this.manager}`)
}
let tim = new Persons ("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science","Networks", 'male' ); 
let elon = new Persons ("Elon Musk", "elon.musk@musky.com", "Boss", 'male')
let alan = new Persons ("Alan Turing", "alan.turing@musky.com", "Computer Scientist", "Cryptography", 'male')
let grace = new Persons ("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers", 'female')
let donald  = new Persons ("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis", 'male')

Persons.prototype.setAll = function(skill, manager) {
  this.setSkills(skill)
  this.setManager(manager) 
  this.displayAll()
}

tim.setAll("Mathematics", "Elon")
alan.setAll("Cobol", "Elon") 
grace.setAll("Computational Complexity", "Elon")
donald.setAll("Protocols", "Elon")
