const fs = require("fs");
fs.writeFile("test.txt", "How does this work", (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
  
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 