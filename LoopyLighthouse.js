
for (var i = 100; i <= 200; i++){
  if (i % 3 === 0 && i % 4 === 0){ //checks to see if i is a multiple of 3 and 4
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0){ //
    console.log("Loopy");
  } else if (i % 4 === 0){
    console.log("Lighthouse");
  } else console.log(i);
}