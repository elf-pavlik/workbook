var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  if(!err){
    var text = data.toString();
    console.log(text.split('\n').length - 1 );
  }
});

