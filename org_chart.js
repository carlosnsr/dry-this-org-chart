function Person(name, email, position, pronoun) {
  this.name = name
  this.email = email
  this.position = position
  this.skills = []
  this.project = 'nothing'
  this.manager = {}
  this.managees = []
  this.pronoun = pronoun
}

Person.prototype.set_manager = function(manager) {
  this.manager = manager
  manager.add_managee(this)
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

Person.prototype.add_managee = function(person) {
  let already_managing = false
  this.managees.forEach(managee => {
    if (managee === person) {
      already_managing = true
    }
  })
  if (!already_managing) {
    this.managees.push(person)
  }
}

Person.prototype.introduce = function() {
  console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
  console.log(`${this.pronoun} can be reached at ${this.email}`)
}

var elon = new Person('Elon Musk', 'grace.musk@musky.com', 'Boss', 'He')

var alan = new Person('Alan Turing', 'alan.turing@musky.com', 'Computer Scientist', 'He')
alan.set_manager(elon)
alan.add_skill('Mathematics')
alan.set_project('Cryptography')

var grace = new Person('Grace Hopper', 'grace.hopper@musky.com', 'Computer Scientist', 'She')
grace.set_manager(elon)
grace.add_skill('Cobol')
grace.set_project('Compilers')

var donald = new Person('Donald Knuth', 'donald.knuth@musky.com', 'Mathematician', 'He')
donald.set_manager(elon)
donald.add_skill('Computational Complexity')
donald.set_project('Algorithm Analysis')

var tim = new Person('Tim Berners-Lee', 'tim.berners_lee@musky.com', 'Computer Science', 'He')
tim.set_manager(elon)
tim.add_skill('Protocols')
tim.set_project('Networks')

alan.introduce()
grace.introduce()
donald.introduce()
tim.introduce()
