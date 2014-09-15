var sum = 0;
var input = process.argv.slice(2);

for(var i=0; i<input.length; i++){
  sum += Number(input[i]);
}

console.log(sum);
