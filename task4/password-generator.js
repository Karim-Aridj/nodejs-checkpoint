const generator = require('generate-password');

let password = generator.generate({symbols: true, numbers: true});
console.log(password);
