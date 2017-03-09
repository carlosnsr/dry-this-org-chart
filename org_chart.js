let employees = [];

function Hire(name, position, project) {
    this.name = name;
    this.email = name.replace(' ', '.').replace('-', '_').toLowerCase() + '@musky.com';
    this.position = position;
    this.manager = {
        name: "Elon Musk",
        email: "elon.musk@musky.com",
        position: "Boss"
    }
    this.project = project;
    this.skills = [];
    employees.push(this);
}
Hire.prototype.train = function(skill) {
    this.skills.push(skill);
}
let alan = new Hire('Alan Turing', 'Computer Scientist', 'Cryptography'),
    grace = new Hire('Grace Hopper', 'Computer Scientist', 'Compilers'),
    donald = new Hire('Donald Knuth', 'Mathematician', 'Algorithm Analysis'),
    tim = new Hire('Tim Berners-Lee', 'Computer Science', 'Networks')

    alan.train('Mathematics');
    grace.train('Cobol');
    donald.train('Computational Complexity');
    tim.train('Protocols');

employees.forEach(employee => {
  console.log(`${employee.name} is a ${employee.position} working on ${employee.project}.`)
  console.log(`He can be reached at ${employee.email}`)
})
// let elon = {
//   name: "Elon Musk",
//   email: "elon.musk@musky.com",
//   position: "Boss",
// }

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
//
// // assign each a manager
// let [alan, grace, donald] = new_hires
//
// alan.manager = elon
// grace.manager = elon
// donald.manager = elon

// send to training
// if (!alan.skills) {
//     alan.skills = []
// }
// alan.skills.push("Mathematics")
//
// if (!grace.skills) {
//     grace.skills = []
// }
// grace.skills.push("Cobol")
//
// if (!donald.skills) {
//     donald.skills = []
// }
// donald.skills.push("Computational Complexity")
//
// // whoops!  new person hired later on, do the same again for him
// let new_hire = {
//     name: "Tim Berners-Lee",
//     email: "tim.berners_lee@musky.com",
//     position: "Computer Science",
//     project: "Networks"
// }
// let tim = new_hire
// tim.manager = elon
//
// if (!tim.skills) {
//     tim.skills = []
// }
// tim.skills.push("Protocols")
//
// console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
// console.log(`He can be reached at ${alan.email}`)
// console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
// console.log(`She can be reached at ${grace.email}`)
// console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
// console.log(`He can be reached at ${donald.email}`)
// console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
// console.log(`He can be reached at ${tim.email}`)
