const bundler = require('./bundler.js');

const jsBundles = [
  { src: ['main.js'], dest: 'bundle.js' },
  { src: 'sketches/home-sketch.js', dest: 'sketches/home-sketch.js' },
  {
    src: [
      //'gallery/scratch-gallery.js',
      'gallery/share-modal.js',
      'gallery/falling-balls-sketch.js'
    ],
    dest: 'gallery.js'
  },
  { src: 'sketches/color-picker.js', dest: 'sketches/color-picker.js' },
  { src: ['firebase-setup.js', 'faq/questions.js'], dest: 'faq.js' },
  { src: ['firebase-setup.js', 'signup/main.js'], dest: 'signup.js' }
];

exports.watch = function () {
  jsBundles.forEach(sources => {
    bundler.create(sources)
      .concat()
      .watch();
  });
};
