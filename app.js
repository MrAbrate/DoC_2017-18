const watchPug = require('./watchPug.js').start();
const watchSass = require('./watchSass.js').start();
const watchJS = require('./watchJS.js').watch();
const server = require('./server.js').start();
const fs = require('fs-extra');


// Copy img/
fs.emptyDir(__dirname + '/public/img', err => {
  if (err) return console.error(err)

  fs.copy(__dirname + '/src/img', __dirname + '/public/img', err => {
    if (err) return console.error(err);
    console.log('success!')
  });
});
