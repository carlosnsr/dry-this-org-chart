let elon = {
  name: "Elon Musk",
  email: "elon.musk@musky.com",
  position: "Boss",
}


function New_hire(name, email, position, project){
  this.name = name;
  this.email = email;
  this.position = position;
  this.projec = project;
}

let alan = new New_hire("Alan Turing", "grace.hopper@musky.com", "Computer Scientist", "Cryptography")
let grace = new New_hire("Grace Hopper", "alan.turing@musky.com", "Computer Scientist", "Compilers")
let donald = new New_hire("Donald Knuth",, "donald.knuth@musky.com", "Mathematician", "Algorithm Analysis")

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

new_hires.prototype.manger = elon

// alan.manager = elon
// grace.manager = elon
// donald.manager = elon


if (!new_hires.skills){
  // send to training
  if (!alan.skills) {
    alan.skills = []
  }
  alan.skills.push("Mathematics")

  if (!grace.skills) {
    grace.skills = []
  }
  grace.skills.push("Cobol")

  if (!donald.skills) {
    donald.skills = []
  }
  donald.skills.push("Computational Complexity")
}

// whoops!  new person hired later on, do the same again for him
// let new_hire = {
//   name: "Tim Berners-Lee",
//   email: "tim.berners_lee@musky.com",
//   position: "Computer Science",
//   project: "Networks"
// }
let tim = new New_hire("Tim Berners-Lee", "tim.berners_lee@musky.com", "Computer Science", "Networks")
tim.manager = elon

if (!tim.skills) {
  tim.skills = []
}
tim.skills.push("Protocols")

console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
console.log(`He can be reached at ${alan.email}`)
console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
console.log(`She can be reached at ${grace.email}`)
console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
console.log(`He can be reached at ${donald.email}`)
console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
console.log(`He can be reached at ${tim.email}`)
