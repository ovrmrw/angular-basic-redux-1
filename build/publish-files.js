const fs = require('fs-extra');
const path = require('path');


const root = path.resolve();
const DIST = path.join(root, 'dist');
const PUBLISH = path.join(root, 'publish');

fs.remove(PUBLISH, err => {
  if (err) { throw err; }
  fs.copy(DIST, PUBLISH, err => {
    if (err) { throw err; }
  });
});
