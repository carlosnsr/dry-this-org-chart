//CONSTRUCTOR AND PROTOTYPE////////////////
function Hire(name, position, project, directory, username = name.replace(' ', '.').replace('-', '_').toLowerCase()) {
    this.name = name;
    this.email = username + '@musky.com';
    this.position = position;
    this.project = project;
    this.skills = [];
    directory.push(this);
}
Hire.prototype.train = function(skill) {
    this.skills.push(skill);
}
Hire.prototype.addManager = function(employee_object) {
    this.manager = employee_object;
}
////////////////////////////////////////////

//Instance Specific/////////////////////////
let employees = [],
    elon = new Hire('Elon Musk', 'Boss', '', employees),
    alan = new Hire('Alan Turing', 'Computer Scientist', 'Cryptography', employees),
    grace = new Hire('Grace Hopper', 'Computer Scientist', 'Compilers', employees),
    donald = new Hire('Donald Knuth', 'Mathematician', 'Algorithm Analysis', employees),
    tim = new Hire('Tim Berners-Lee', 'Computer Science', 'Networks', employees)

alan.train('Mathematics');
grace.train('Cobol');
donald.train('Computational Complexity');
tim.train('Protocols');




employees.forEach(employee => {
    if (employee.name != 'Elon Musk') {
        employee.addManager(employees[0])
    }
})

employees.forEach(employee => {
    console.log(`${employee.name} is a ${employee.position} working on ${employee.project}`)
    //changed "He" to "and".... chauvinist.
    console.log(`and can be reached at ${employee.email}`)
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
