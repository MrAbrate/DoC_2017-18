const fs = require('fs-extra');
const sass = require('node-sass');

exports.start = function () {
  render();
  fs.watch(__dirname + '/src/scss', {encoding: 'utf-8'}, (eventType, filename) => {
    render();
  });
}

function render() {
  const srcFile = __dirname + '/src/scss/main.scss';
  const outFile = __dirname + '/public/css/style.css';

  sass.render({
    file: srcFile
  }, (err, result) => {
    if (err) return console.log(err);

    fs.outputFile(outFile, result.css, err => {
      if (err) throw err; // => null
      console.log('style.css saved to /public/css.');
    });
  });
}
