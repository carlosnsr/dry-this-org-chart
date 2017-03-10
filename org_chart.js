//CONSTRUCTOR AND PROTOTYPE////////////////
function Hire(name, position, project, directory, username = name.replace(' ', '.').replace('-', '_').toLowerCase()) {
    this.name = name;
    this.email = username + '@musky.com';
    this.position = position;
    this.project = project;
    this.skills = [];

    directory.push(this);
    if (this.position != 'Boss') {
        console.log(`${this.name} is a ${this.position} working on ${this.project}`);
        console.log(`and can be reached at ${this.email}`);
    }
}

Hire.prototype.train = function(skill) {
    this.skills.push(skill);
    return this;
}

Hire.prototype.addManager = function(employee_object) {
    this.manager = employee_object;
    return this;
}
////////////////////////////////////////////

//Instance Specific/////////////////////////
let employees = [],
    candidates = [
        ['Elon Musk', 'Boss', '', employees],
        ['Alan Turing', 'Computer Scientist', 'Cryptography', employees],
        ['Grace Hopper', 'Computer Scientist', 'Compilers', employees],
        ['Donald Knuth', 'Mathematician', 'Algorithm Analiysis', employees],
        ['Tim Berners-Lee', 'Computer Science', 'Networks', employees]
    ];

candidates.forEach(candidate => {
    Reflect.construct(Hire, candidate)
})

let trainees = [
        ['Alan Turing', 'Mathematics'],
        ['Grace Hopper', 'Cobol'],
        ['Donald Knuth', 'Computational Complexity'],
        ['Tim Berners-Lee', 'Protocols']
    ],
    index;

trainees.forEach(trainee => {
    index = employees.findIndex(employee => employee.name === trainee[0]);
    employees[index].train(trainee[1])
})

employees.forEach(employee => {
    if (employee.position != 'Boss') {
        employee.addManager(employees.find(employee => employee.position === 'Boss'))
    }
})
