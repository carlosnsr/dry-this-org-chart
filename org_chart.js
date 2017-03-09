function Boss(name, email, position){
  this.name = name;
  this.email = email;
  this.position = "Boss";
}

function Hires(name, email, position, project, manager, skills){
  this.name = name;
  this.email = email;
  this.position = position;
  this.project = project;
  this.manager = manager;
  this.skills = skills;
}

let elon = new Boss("elon", "elon.musk@musky.com")
let alan = new Hires("Alan Turing", "Alan Turing", "Computer Scientist", "Cryptography", elon, "Mathematics")
let grace = new Hires("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers", elon, "Cobol")
let donald = new Hires("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis", elon, "Computational Complexity")
let tim = new Hires("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science", "Networks", elon, "Protocols")

console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
console.log(`He can be reached at ${alan.email}`)
console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
console.log(`She can be reached at ${grace.email}`)
console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
console.log(`He can be reached at ${donald.email}`)
console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
console.log(`He can be reached at ${tim.email}`)
