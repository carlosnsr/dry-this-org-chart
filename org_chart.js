function Person(name, email, position, project, sex) {
  this.name = name;
  this.email = email;
  this.position = position;
  this.skills = [];
  this.project = project;
  this.sex = sex;
}

Person.prototype.addManager = function(man) {
  this.manager = man;
}

Person.prototype.checkTraining = function(skill) {
  (this.skills).filter(function(x) {
    if (x !== skill) {
    this.skills.push(skill)
  } else {
  console.log(this.name, " doesn't need training.");
    }
  })
  // Refactored
  // if (this.skills.indexOf(skill) > -1) {
  //   console.log(this.name, " doesn't need training.");
  // }
  // else {
  //   this.skills.push(skill)
  // }
}

Person.prototype.print = function() {
  var herm;
  console.log(this.name, " is a ", this.position, " working on ", this.project, ".");
  if(this.sex == "Male") {
    herm = "He";
  } else {
    herm = "She";
  }
  console.log(herm, " can be reached at ", this.email);
}

Person.prototype.completePerson = function(man, skill) {
  this.addManager(man);
  this.checkTraining(skill);
  this.print();
}

let elon = new Person ("Elon Musk", "elon.musk@musky.com", "Boss", "none", "Male");
let alan = new Person ("Alan Turing","alan.turing@musky.com","Computer Scientist","Cryptography", "Male");
let grace = new Person ("Grace Hopper", "grace.hopper@musky.com", "Computer Scientist", "Compilers", "Female");
let donald = new Person ("Donald Knuth", "donald.knuth@musky.com","Mathematician", "Algorithm Analysis", "Male");

alan.completePerson("Elon", "Mathematics");
grace.completePerson("Elon", "Cobol");
donald.completePerson("Elon", "Computational Complexity");

// whoops!  new person hired later on, do the same again for him
let tim = new Person ("Tim Berners-Lee","tim.berners_lee@musky.com","Computer Science","Networks", "Male");

tim.completePerson("Elon", "Protocols");
