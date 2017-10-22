const fs = require('fs');
const UglifyJS = require("uglify-es");
const writeFile = require('./writeFile.js');

const codeStore = {};

const dir = __dirname + '/src/js/';
const jsFiles = [
  {
    source: ['main.js'],
    dest: 'bundle.js'
  },
  {
    source: ['sketches/home-sketch.js'],
    dest: 'sketches/home-sketch.js'
  }
]

function forEachFileInBundle(fn) {
  jsFiles.forEach((bundle) => {
    bundle.source.forEach((filename) => {
      fn(filename, bundle);
    });
  });
}

function concatinate(filename) {
  forEachFileInBundle((filename, bundle) => {
    if (filename && !bundle.source.includes(filename)) return;

    const code = fs.readFileSync(dir + filename, {encoding: 'utf-8'});
    codeStore[bundle.dest] = codeStore[bundle.dest] || code;
  });

  jsFiles.forEach(bundle => {
    const code = codeStore[bundle.dest];
    codeStore[bundle.dest] = '';
    if (code) {
      const minified = UglifyJS.minify(code);
      writeFile(__dirname + '/public/js/' + bundle.dest, minified.code, (err) => {
        if (err) throw err;
        console.log(bundle.dest + " Saved");
      });
    }
  });
}

exports.start = function () {
  concatinate();
  ['/', '/sketches/'].forEach(dir => {
    fs.watch(__dirname + '/src/js' + dir, {encoding: 'utf-8'}, (eventType, filename) => {
      if (eventType === 'change') {
        concatinate(filename)
      }
    });
  });
};
