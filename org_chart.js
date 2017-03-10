
//Person constructor
function Person(name, email, position, project, pronoun) {
  this.name = name;
  this.email = email;
  this.position = position;
  this.project = project;
  this.skills = [];
  this.pronoun = pronoun;
}

//Set skills
Person.prototype.addSkills = function(skill) {
  this.skills.push(skill);
}

//Set manager
Person.prototype.addManager = function(manager) {
  this.manager = manager
}

//Greeting
Person.prototype.greeting = function() {
  console.log(`${this.name} is a ${this.position} working on ${this.project}`);
  console.log(`${this.pronoun} can be reached at ${this.email}`);
}

let [alan, grace, donald] = new_hires




// whoops!  new person hired later on, do the same again for him
let new_hire =  new Person(){
  name: "Tim Berners-Lee",
  email: "tim.berners_lee@musky.com",
  position: "Computer Science",
  project: "Networks"
}
let tim = new_hire
tim.manager = elon

if (!tim.skills) {
  tim.skills = []
}
tim.skills.push("Protocols")

//assign Person
let elon = new Person('Elon Musk', "elon.musk@musky.com", "Boss", "He")
let alan = new Person('Alan Turing', "alan.turing@musky.com", "Computer Scientist", "Cryptography", "He");
let grace = new Person('Grace Hopper', "grace.hopper@musky.com", "Computer Scientist", "Compilers", "She");
let donald = new Person('Donald Knuth', "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis", "He");
let tim = new Person("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science", "Networks");

//greeting
elon.greeting()
alan.greeting()
grace.greeting()
donald.greeting()

//addManager
alan.addManager(elon)
grace.addManager(elon)
donald.addManager(elon)
