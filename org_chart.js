
function Employee(name, email, position, project){
  this.name = name
  this.email = email
  this.position = position
  this.skills = []
  this.description = `${name} is a ${position} working on ${project}. He can be reached at ${email}`
}

Employee.prototype.set_manager = function(manager){
  this.manager = manager
}

Employee.prototype.set_project = function(project){
  this.project = project
}

Employee.prototype.add_skill = function (skill){
  this.skills.push(skill)
}

let elon = new Employee("Elon Musk", "elon.musk@musky.com", "Manager")

let alan = new Employee("Alan Turing", "alan.turing@musky.com", "Computer Scientist", "Cryptography")
alan.add_skill("Mathematics")
alan.set_manager(elon)

let grace = new Employee("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers")
grace.add_skill("Cobol")
grace.set_manager(elon)

let donald = new Employee("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis")
donald.add_skill("Computational complexity")
donald.set_manager(elon)

let new_hires = [alan, grace, donald, elon]

let tim = new Employee("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science", "Networks")
tim.add_skill("Protocols")
tim.set_manager(elon)
new_hires.push(tim)

console.log(new_hires)

// employee_description(alan)
// employee_description(grace)
// employee_description(donald)
// employee_description(tim)


// console.log(new_hires)
// console.log("############################################")

// if (!alan.skills) {
//   alan.skills = []
// }
// alan.skills.push("Mathematics")

// if (!grace.skills) {
//   grace.skills = []
// }
// grace.skills.push("Cobol")

// if (!donald.skills) {
//   donald.skills = []
// }
// donald.skills.push("Computational Complexity")

// tim.manager = elon

// if (!tim.skills) {
//   tim.skills = []
// }
// tim.skills.push("Protocols")
// console.log(new_hires)
// console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
// console.log(`He can be reached at ${alan.email}`)
// console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
// console.log(`She can be reached at ${grace.email}`)
// console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
// console.log(`He can be reached at ${donald.email}`)
// console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
// console.log(`He can be reached at ${tim.email}`)


// let new_hires = [
//   {
//     name: "Alan Turing",
//     email: "alan.turing@musky.com",
//     position: "Computer Scientist",
//     project: "Cryptography"
//   },
//   {
//     name: "Grace Hopper",
//     email: "grace.hopper@musky.com",
//     position: "Computer Scientist",
//     project: "Compilers"
//   },
//   {
//     name: "Donald Knuth",
//     email: "donald.knuth@musky.com",
//     position: "Mathematician",
//     project: "Algorithm Analysis"
//   }
// ]

// assign each a manager
// let [alan, grace, donald] = new_hires

// alan.manager = elon
// grace.manager = elon
// donald.manager = elon

// send to training

// whoops!  new person hired later on, do the same again for him
// let new_hire = {
//   name: "Tim Berners-Lee",
//   email: "tim.berners_lee@musky.com",
//   position: "Computer Science",
//   project: "Networks"
// }
// let tim = new_hire
// tim.manager = elon

// if (!tim.skills) {
//   tim.skills = []
// }
// tim.skills.push("Protocols")

// console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
// console.log(`He can be reached at ${alan.email}`)
// console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
// console.log(`She can be reached at ${grace.email}`)
// console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
// console.log(`He can be reached at ${donald.email}`)
// console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
// console.log(`He can be reached at ${tim.email}`)
