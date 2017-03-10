function Person(name, email, position, gender) {
  this.name = name;
  this.email = email;
  this.position = position;
  this.gender = gender;
}

let elon = new Person("Elon Musk", "elon.musk@musky.com", "Boss")

Person.prototype.employee = function(project, manager) {
  this.project = project;
  this.manager = manager;
}

let alan = new Person("Alan Turing", "alan.turing@musky.com", "Computer Scientist", "He")
let grace = new Person("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "She")
let donald = new Person("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "He")

alan.employee("Cryptography", elon.name)
grace.employee("Compilers", elon.name)
donald.employee("Algorithm Analysis", elon.name)

Person.prototype.training = function(name) {
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

let tim = new Person("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science", "He")
tim.employee("Networks", elon.name)
tim.training()

var employees = [alan, grace, donald, tim]

var showDetail = function(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(`${element.name} is a ${element.position} working on ${element.project}.`)
    console.log(`${element.gender} can be reached at ${element.email}`)
  }
}

showDetail(employees)
