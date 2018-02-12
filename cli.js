#!/usr/bin/env node
var path = require('path');
require('./index');

var arg = process.argv[2];
if (!arg) {
  console.error('nnode should be called with a js file as an argument');
  process.exit(-1);
}
if (arg === '-v' || arg === '--version') {
  console.log(require('./package.json').version);
  process.exit(0);
}

process.argv.shift();

if (arg === '--transpile') {
  const transpile = require('./transpile-directory');
  transpile();
  process.exit(0);
}

try {
  require(path.resolve(arg));
} catch (e) {
  if (e.message === 'Cannot find module \'flow-runtime\'') {
    console.error('Missing flow-runtime. Run `npm install flow-runtime`');
    process.exit(-1);
  }
  throw e;
}
