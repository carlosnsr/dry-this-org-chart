function Persons (name, email, position, project, gender) {
  this.name = name;
  this.email = email;
  this.position = position;
  this.project = project;
  this.skills = [];
  this.gender = gender;
}

Persons.prototype.setSkills = function(skill) {
  for(let i = 0; i < this.skills.length; i++) {
    if(this.skills[i] != skill) {
      this.skills.push(skill)
    }
  }
}

let tim = new Persons ("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science","Networks" ); 
let elon = new Persons ("Elon Musk", "elon.musk@musky.com", "Boss")
let alan = new Persons ("Alan Turing", "alan.turing@musky.com", "Computer Scientist", "Cryptography")
let grace = new Persons ("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers")
let donald  = new Persons ("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis")

tim.setSkills("Mathematics")
alan.setSkills("Cobol")
grace.setSkills("Computational Complexity")
donald.setSkills("Protocols")



// assign each a manager
alan.manager = elon
grace.manager = elon
donald.manager = elon
tim.manager = elon

console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
console.log(`His Skills are: ${alan.skills}`)
console.log(`He can be reached at ${alan.email}`)
console.log(`His Manager is ${alan.manager}`)
console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
console.log(`She can be reached at ${grace.email}`)
console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
console.log(`He can be reached at ${donald.email}`)
console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
console.log(`He can be reached at ${tim.email}`)
