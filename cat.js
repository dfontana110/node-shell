const fs = require('fs');

const cat = (fileArray) => {
  fileArray.forEach(file => {
    fs.readFile(`./${file}`, 'utf8', (err, data) => {
      if (err){throw err;}
      console.log(data);
    });
  });
};

module.exports = cat;
