const fs = require('fs');

setInterval(()=> {
  var textByLine = fs.readFileSync('data.txt').toString().split("\n");
  if(parseInt(textByLine[0]) === 1){
    console.log(textByLine[1]);
    //fetch(`http://localhost:3000/getHard?id=${parseInt(textByLine[1])}`);
  }
},3000);

