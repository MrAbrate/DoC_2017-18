const fs = require('fs-extra');
const pug = require('pug');
const settings = require('./settings.json');
const pugFiles = [
  {
    source: './src/index.pug',
    dest: './public/index.html'
  },
  {
    source: './src/gallery.pug',
    dest: './public/gallery/index.html'
  },
  {
    source: './src/coordinate-locator.pug',
    dest: './public/coordinate-locator/index.html'
  },
  {
    source: './src/activities.pug',
    dest: './public/activities/index.html'
  },
  {
    source: './src/activities/choose-your-own-adventure.pug',
    dest: './public/activities/choose-your-own-adventure/index.html'
  },
  {
    source: './src/activities/html.pug',
    dest: './public/activities/html/index.html'
  },
  {
    source: './src/activities/p5js.pug',
    dest: './public/activities/p5js/index.html'
  },
  {
    source: './src/activities/scratch-animations.pug',
    dest: './public/activities/scratch-animations/index.html'
  },
  {
    source: './src/activities/scratch-games.pug',
    dest: './public/activities/scratch-games/index.html'
  },
  {
    source: './src/activities/two-for-the-crew.pug',
    dest: './public/activities/two-for-the-crew/index.html'
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
    code = pug.renderFile(file.source, {domain: settings.domain});
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
