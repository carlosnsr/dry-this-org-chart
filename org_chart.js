let elon = {
  name: "Elon Musk",
  email: "elon.musk@musky.com",
  position: "Boss",
}


function Employee(name, email, position, project, manager){
  this.name = name;
  this.email = email;
  this.position = position;
  this.project = project;
  this.manager = manager;
}

let alan = new Employee("Alan Turing", "grace.hopper@musky.com", "Computer Scientist", "Cryptography", elon)
let grace = new Employee("Grace Hopper", "alan.turing@musky.com", "Computer Scientist", "Compilers", elon)
let donald = new Employee("Donald Knuth", "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis", elon)


alan.skills = []
alan.skills.push("Mathematics")

grace.skills = []
grace.skills.push("Cobol")

donald.skills = []
donald.skills.push("Computational Complexity")

let tim = new Employee("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science", "Networks")
tim.manager = elon
tim.skills = []
tim.skills.push("Protocols")

let employees = [alan, grace, donald, tim]

console.log(employees);



for (var i = 0; i < employees.length; i++) {
  let emp = employees[i];
  console.log(`${emp.name} is a ${emp.position} working on ${emp.project}.`)
  console.log(`He can be reached at ${emp.email}`)
}
