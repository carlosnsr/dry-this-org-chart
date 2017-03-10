function Person(name, position, project = null, gender = "M") {
  this.name = name
  this.email = Person.make_email(name)
  this.position = position
  this.project = project
  this.gender = gender
  this.skills = []
}

Person.prototype.set_manager = function (manager) {
  this.manager = manager
}

Person.prototype.train = function (skill) {
  this.skills.push(skill)
}

Person.prototype.introduce = function () {
  console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
  console.log(`${this.gender === "F" ? 'She' : 'He' } can be reached at ${this.email}`)
}

Person.make_email = function (name) {
  return name.replace(' ', '.').replace('-', '_').toLowerCase() + "@musky.com"
}

let elon = new Person("Elon Musk", "elon.musk@musky.com", "Boss")
let new_hires = [
  new Person("Alan Turing", "Computer Scientist", "Cryptography"),
  new Person("Grace Hopper", "Computer Scientist", "Compilers", "F"),
  new Person("Donald Knuth", "Mathematician", "Algorithm Analysis"),
]

function on_board(employee, manager, course) {
  employee.set_manager(manager)
  employee.train(course)
  employee.introduce()
}

let [alan, grace, donald] = new_hires
on_board(alan, elon, "Mathematics")
on_board(grace, elon, "Cobol")
on_board(donald, elon, "Computational Complexity")

// whoops!  new person hired later on, do the same again for him
let tim = new Person("Tim Berners-Lee", "Computer Scientist", "Networks" )
on_board(tim, elon, "Protocols")
