const fs = require('fs');

const data = fs.readFileSync('welcome.txt', {encoding: 'utf-8'});
console.log(data);
