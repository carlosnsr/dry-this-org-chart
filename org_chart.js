"use strict";

function Employee(name, email, position, gender, project){
  this.name = name;
  this.email = email;
  this.position = position;
  this.gender = gender;
  if (!project) {
  this.project = "";
  } else {
  this.project = project;
  }
}

Employee.prototype.addSkill = function(skills) {
  if (!this.skills) {
    this.skills = [];
  } else {
  this.skills = skills;
  }
}

Employee.prototype.setManager = function(manager) {//not working?
  this.manager = manager;
}

Employee.prototype.print = function(){ //working
  console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
  if (this.gender === "female") {
      console.log(`She can be reached at ${this.email}`)
  } else {
  console.log(`He can be reached at ${this.email}`)
  }
};


let elon = new Employee("Elon Musk","elon.musk@musky.com","male","Boss");
let alan = new Employee("Alan Turing","alan.turing@musky.com","Computer Scientist","male", "Cryptography");
let grace = new Employee("Grace Hopper","grace.hopper@musky.com","Computer Scientist","female","Compilers");
let donald = new Employee("Donald Knuth","donald.knuth@musky.com","Mathematician","male","Algorithm Analysis");
let tim = new Employee("Tim Berners-Lee","tim.berners_lee@musky.com","Computer Science","male","Networks");

console.log("elon", elon);
elon.print();
elon.setManager("nobody");
console.log("elon", elon);

grace.print();

donald.setManager("Elon Musk");
alan.setManager("Elon Musk");
alan.setManager("Elon Musk");

alan.addSkill("Mathematics");
grace.addSkill("Cobol");
donald.addSkill("Computational Complexity");
tim.addSkill("Protocols");


// let elon = {
//   name: "Elon Musk",
//   email: "elon.musk@musky.com",
//   position: "Boss",
// }
//
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
          // if (!alan.skills) {
          //   alan.skills = []
          // }
          // alan.skills.push("Mathematics")
          //
          // if (!grace.skills) {
          //   grace.skills = []
          // }
          // grace.skills.push("Cobol")
          //
          // if (!donald.skills) {
          //   donald.skills = []
          // }
          // donald.skills.push("Computational Complexity")

// whoops!  new person hired later on, do the same again for him
// let new_hire = {
//   name: "Tim Berners-Lee",
//   email: "tim.berners_lee@musky.com",
//   position: "Computer Science",
//   project: "Networks"
// }
      // let tim = new_hire
      // tim.manager = elon
      //
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
