function range(start, end, step) {
  var array = [];
  if ((start != undefined && end != undefined && step != undefined) && (start <= end) && (step != 0 && step > 0)){
    for(var i = start; i <= end; i += step){
        array.push(i);
    }
  } else {
    array = [];
    return array;
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));