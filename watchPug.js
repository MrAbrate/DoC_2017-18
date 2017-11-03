const fs = require('fs-extra');
const pug = require('pug');
const pugFiles = [
  {
    source: './src/index.pug',
    dest: './public/index.html'
  },
  {
    source: './src/signup.pug',
    dest: './public/signup/index.html'
  },
  {
    source: './src/faq.pug',
    dest: './public/faq/index.html'
  },
  {
    source: './src/share.pug',
    dest: './public/share/index.html'
  },
  {
    source: './src/color-picker.pug',
    dest: './public/color-picker/index.html'
  }
];


exports.start = function () {
  pugFiles.forEach(watchFile);

  fs.watch('./src/inc/', {encoding: 'utf-8'}, (eventType, filename) => {
    pugFiles.forEach(renderFile);
  });
}

function renderFile(file) {
  let code;
  try {
    code = pug.renderFile(file.source);
  } catch(err) {
    console.log(err);
  }

  fs.outputFile(file.dest, code, err => {
    if (err) throw err; // => null
    console.log('Rendered pug file to ' + file.dest);
  });
}

function watchFile(file, i) {
  renderFile(file);
  fs.watch(file.source, {encoding: 'utf-8'}, (eventType, filename) => {
    if (eventType === 'change') {
      renderFile(file);
    }
  });
}
