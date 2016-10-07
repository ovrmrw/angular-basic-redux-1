const fs = require('fs-extra');
const path = require('path');


const root = path.resolve();
const DIST = path.join(root, 'dist');
const DOCS = path.join(root, 'docs');

fs.remove(DOCS, err => {
  if (err) { throw err; }
  fs.copy(DIST, DOCS, err => {
    if (err) { throw err; }
  });
});
