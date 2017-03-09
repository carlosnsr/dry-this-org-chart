# DRY Employees

## Get Ready

Look in `org_chart.js`.
Notice the duplicated code.
Refactor the code to make it more readable and maintainable.
Do this by:
- using constructor functions
- adding methods to the prototype
- creating methods to reduce duplication

## Tasks

- Create a constructor function to create persons
  - Be sure to include all relevant properties and give them good defaults
- Identify 3 functions that should be added to the prototype
  - Add them to the prototype
- When you are done, you should be able to run it with `node org_chart.js` and have the same results as before

## Standards

- *Create objects using constructor functions*
  - Constructor functions start with a capital letter
  - Instance methods are added to the constructor function's prototype (not this)
- *Refactor code according to DRY*
  - Recognize the need for DRY refactorings
  - Extract methods
