function Employee(name, gender, email, position, project, manager) {
  this.name = name
  this.gender = gender
  this.email = email
  this.position = position
  this.project = project
  this.manager = manager
}

let elon = new Employee("Elon Musk", "elon.musk@musky.com", "Boss")
let alan = new Employee("Alan Turing", "He", "alan.turing@musky.com", "Computer Scientist", "Cryptography", elon)
let grace = new Employee("Grace Hopper", "She", "grace.hopper@musky.com", "Computer Scientist", "Compilers", elon)
let donald = new Employee("Donald Knuth", "He" ,"donald.knuth@musky.com", "Mathematician", "Algorithm Analysis", elon)


Employee.prototype.training = function(name) {
  if (!this.skills) {
     this.skills = []
  }
  if (this.name === "Donald Knuth") {
    this.skills.push("Computational Complexity")
  }
  if (this.name === "Alan Turing") {
    this.skills.push("Mathematics")
  }
  if (this.name === "Grace Hopper") {
    this.skills.push("Cobol")
  }
  if (this.name === "Tim Berners-Lee") {
    this.skills.push("Protocols")
  }
}
alan.training()
grace.training()
donald.training()

let tim = new Employee("Tim Berners-Lee", "He", "tim.berners_lee@musky.com", "Computer Science", "Networks", elon)
tim.training()

var employees = [alan, grace, donald, tim]

var Dalog = function(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(`${element.name} is a ${element.position} working on ${element.project}.`)
    console.log(`${element.gender} can be reached at ${element.email}`)
  }
}
 Dalog(employees)
