function Person(name, email, position, project = null) {
  this.name = name
  this.email = email
  this.position = position
  this.project = project
  this.skills = []
}

Person.prototype.set_manager = function (manager) {
  this.manager = manager
}

Person.prototype.train = function (skill) {
  this.skills.push(skill)
}

let elon = new Person("Elon Musk", "elon.musk@musky.com", "Boss")
let new_hires = [
  new Person("Alan Turing", "alan.turing@musky.com", "Computer Scientist", "Cryptography"),
  new Person("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers"),
  new Person("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis"),
]

// assign each a manager
let [alan, grace, donald] = new_hires
alan.set_manager(elon)
grace.set_manager(elon)
donald.set_manager(elon)

// send to training
alan.train("Mathematics")
grace.train("Cobol")
donald.train("Computational Complexity")

// whoops!  new person hired later on, do the same again for him
let tim = new Person("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Scientist", "Networks" )
tim.set_manager(elon)
tim.train("Protocols")

console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
console.log(`He can be reached at ${alan.email}`)
console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
console.log(`She can be reached at ${grace.email}`)
console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
console.log(`He can be reached at ${donald.email}`)
console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
console.log(`He can be reached at ${tim.email}`)
