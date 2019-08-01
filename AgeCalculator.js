// Age Calculator problem.

function ageCalculator(name, yearOfBirth, currentYear){
  var age = (currentYear - yearOfBirth);
  var str = (name + " is " + age + " years old.");

  return str;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));