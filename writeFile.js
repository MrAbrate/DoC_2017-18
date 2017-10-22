const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = function (filePath, content, cb) {
  const dir = path.dirname(filePath);
  mkdirp(dir, (err) => {
    if (err) throw err;
    fs.writeFile(filePath, content, cb);
  });
};
