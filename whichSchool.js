const whichSchool  = function (age) {
  var school = (
  age < 13 ? "Elementary School" :
  age >= 13 && age <= 18 ? "Secondary School" :
   "Lighthouse Labs"
   )
  return school;
}
console.log(whichSchool(12));
console.log(whichSchool(16));
console.log(whichSchool(25));