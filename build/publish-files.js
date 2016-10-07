const fs = require('fs-extra');
const path = require('path');


const root = path.resolve();
const DIST = path.resolve(root, 'dist');
const DOCS = path.resolve(root, 'docs');
const NGFACTORY = path.resolve(DOCS, 'ngfactory');

fs.remove(DOCS, err => { /* delete ./docs directory. */
  if (err) { throw err; }
  fs.copy(DIST, DOCS, err => { /* copy ./dist directory to ./docs */
    if (err) { throw err; }
    fs.remove(NGFACTORY, err => { /* delete ./docs/ngfactory directory. */
      if (err) { throw err; }
    });
  });
});
