function Person(name, email, position) {
  this.name = name
  this.email = email
  this.position = position
  this.skills = []
  this.project = 'nothing'
  this.manager = {}
}

Person.prototype.set_manager = function(manager) {
  this.manager = manager
}

Person.prototype.set_project = function(project) {
  this.project = project
}

Person.prototype.add_skill = function(skill) {
  let has_skill = false
  this.skills.forEach(existing_skill => {
    if (existing_skill = skill) {
      has_skill = true
    }
  })
  if (!has_skill) {
    this.skills.push(skill)
  }
}

var elon = new Person('Elon Musk', 'grace.musk@musky.com', 'Boss')

var alan = new Person('Alan Turing', 'alan.turing@musky.com', 'Computer Scientist')
alan.set_manager(elon)
alan.add_skill('Mathematics')
alan.set_project('Cryptography')

var grace = new Person('Grace Hopper', 'grace.hopper@musky.com', 'Computer Scientist')
grace.set_manager(elon)
grace.add_skill('Cobol')
grace.set_project('Compilers')

var donald = new Person('Donald Knuth', 'donald.knuth@musky.com', 'Mathematician')
donald.set_manager(elon)
donald.add_skill('Computational Complexity')
donald.set_project('Algorithm Analysis')

var tim = new Person('Tim Berners-Lee', 'tim.berners_lee@musky.com', 'Computer Science')
tim.set_manager(elon)
tim.add_skill('Protocols')
tim.set_project('Networks')

console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
console.log(`He can be reached at ${alan.email}`)
console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
console.log(`She can be reached at ${grace.email}`)
console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
console.log(`He can be reached at ${donald.email}`)
console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
console.log(`He can be reached at ${tim.email}`)
