const fs = require('fs-extra');
const UglifyJS = require("uglify-es");


class Bundle {
  constructor(src, dest) {
    this.source = src;
    this.dest = dest;
    this.code = '';
  }

  forEachSrc(fn) {
    this.source.forEach(function (filename) {
      fn(filename, this)
    }, this);
  }

  concatinate() {
    this.source.forEach(function (filename) {
      this.code += fs.readFileSync(dir + filename, {encoding: 'utf-8'});
    }, this);

    const minified = UglifyJS.minify(this.code);
    this.code = '';

    fs.outputFile(__dirname + '/public/js/' + this.dest, minified.code, err => {
      if (err) throw err; // => null
      console.log(this.dest + " Saved");
    });
  }
}


const dir = __dirname + '/src/js/';
const jsBundles = [
    new Bundle(['main.js'], 'bundle.js'),
    new Bundle(['sketches/home-sketch.js'], 'sketches/home-sketch.js'),
    new Bundle(
      [
        'share/scratch-gallery.js',
        'share/share-modal.js',
        'share/falling-balls-sketch.js'
      ],
      'share.js'
    ),
    new Bundle(['signup.js'], 'signup.js'),
    new Bundle(['sketches/color-picker.js'], 'sketches/color-picker.js')
];



exports.start = function () {
  jsBundles.forEach(bundle => {
    bundle.concatinate();
    bundle.source.forEach(filename => {
      fs.watch(dir + filename, {encoding: 'utf-8'},(eventType, filename) => {
        if (eventType === 'change') {
          bundle.concatinate();
        }
      });
    });
  });
};
