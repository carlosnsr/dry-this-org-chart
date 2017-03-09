function Person(name, email, position, project = null, gender = "M") {
  this.name = name
  this.email = email
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

let elon = new Person("Elon Musk", "elon.musk@musky.com", "Boss")
let new_hires = [
  new Person("Alan Turing", "alan.turing@musky.com", "Computer Scientist", "Cryptography"),
  new Person("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers", "F"),
  new Person("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis"),
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
let tim = new Person("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Scientist", "Networks" )
on_board(tim, elon, "Protocols")
