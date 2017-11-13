const fs = require('fs-extra');
const UglifyJS = require("uglify-es");
const srcDir = __dirname + '/src/js/';
const outDir = __dirname + '/public/js/';


const protoBundler = {
  concat() {
    this.src.forEach(function (filename) {
      this.code += fs.readFileSync(srcDir + filename, {encoding: 'utf-8'});
    }, this);

    const minified = UglifyJS.minify(this.code);
    this.code = '';

    fs.outputFile(outDir + this.dest, minified.code, err => {
      if (err) throw err; // => null
      console.log(this.dest + " Saved");
    });
    return this;
  },

  watch() {
    this.src.forEach(filename => {
      fs.watch(srcDir + filename, {encoding: 'utf-8'},(eventType, filename) => {
        if (eventType === 'change') {
          this.concat();
        }
      });
    });
    return this;
  }
};


exports.create = function (sources) {
  const bundle = Object.create(protoBundler);

  sources.src = (typeof sources.src === 'string') ? [sources.src] : sources.src;
  Object.assign(bundle, sources);
  bundle.code = '';
  return bundle;
};
