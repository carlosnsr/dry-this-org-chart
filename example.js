// constructor function
function Dog(name, owner) {
  this.legs = 4
  this.name = name
  this.owner = owner
  this.smell = "Clean"
  this.mood = "Calm"
}

// add methods that affect a dog to the Dog prototype
Dog.prototype.play = function () {
  this.mood = "Happy"
  this.smell = "Smells like Dog"
}

Dog.prototype.wash = function () {
  if (this.smell !== "Clean") {
    console.log(this.name, "gets a bath")
    this.smell = "Clean"
    this.mood = "Down"
  } else {
    console.log(this.name, "does not need a bath")
  }
}

// create Molly
let molly = new Dog("Molly", "Carlos")
  // creates an empty object
  // gives that object to the constructor fn (i.e. Dog())
  // Dog() then modifies that object
  // that object gets the Dog() prototype
  // Dog() automatically returns this object

console.log(molly)
molly.play()
console.log(molly)

let iago = new Dog("Iago", "Berto")
iago.toy = "Chewed rabbit"
console.log(iago)
iago.play()
console.log(iago)

iago.wash = function () {
  console.log(`${this.name} is always "Clean"`)
}
iago.wash()
console.log(iago)
iago.wash()

molly.wash()
console.log(molly)
