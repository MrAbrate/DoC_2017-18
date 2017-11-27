const bundler = require('./bundler.js');

const jsBundles = [
  { src: ['main.js'], dest: 'bundle.js' },
  { src: 'sketches/home-sketch.js', dest: 'sketches/home-sketch.js' },
  {
    src: [
      //'gallery/scratch-gallery.js',
      //'gallery/share-modal.js',
      'gallery/load-projects.js',
      'gallery/falling-balls-sketch.js'
    ],
    dest: 'gallery.js'
  },
  { src: 'sketches/coordinate-locator.js', dest: 'sketches/coordinate-locator.js' },
  { src: ['firebase-setup.js', 'faq/questions.js'], dest: 'faq.js' },
];

exports.watch = function () {
  jsBundles.forEach(sources => {
    bundler.create(sources)
      .concat()
      .watch();
  });
};
