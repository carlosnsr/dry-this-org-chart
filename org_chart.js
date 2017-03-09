function Person(name, email, skill, pronoun) {
  this.email = email
  this.managees = []
  this.manager = {}
  this.name = name
  this.position = ''
  this.project = ''
  this.pronoun = pronoun
  this.skills = [skill]
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

Person.prototype.introduce = function() {
  console.log(`${this.name} is a ${this.position} working on ${this.project}.`)
  console.log(`${this.pronoun} can be reached at ${this.email}`)
}

Person.prototype.set_manager = function(manager) {
  this.manager = manager
  manager.add_managee(this)
}

Person.prototype.set_position = function(position) {
  this.position = position
}

Person.prototype.set_project = function(project) {
  this.project = project
}

Person.prototype.on_board = function(manager, position, project) {
  this.set_manager(manager)
  this.set_position(position)
  this.set_project(project)
  this.introduce()
}

var elon = new Person('Elon Musk', 'elon.musk@musky.com', 'Boss', 'He')

var alan = new Person('Alan Turing', 'alan.turing@musky.com', 'Mathematics', 'He')
alan.on_board(elon, 'Computer Scientist', 'Cryptography')

var grace = new Person('Grace Hopper', 'grace.hopper@musky.com', 'Cobol', 'She')
alan.on_board(elon, 'Computer Scientist', 'Compilers')

var donald = new Person('Donald Knuth', 'donald.knuth@musky.com', 'Computational Complexity', 'He')
donald.on_board(elon, 'Mathematician', 'Algorithm Analysis')

var tim = new Person('Tim Berners-Lee', 'tim.berners_lee@musky.com', 'Protocols', 'He')
tim.on_board(elon, 'Computer Scientist', 'Networks')
