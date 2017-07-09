#!/usr/bin/env node

const concat = require('concat-files');
const fs = require('fs');

const presentation = process.env.PRESENTATION || 'boilerplate';
const theme = process.env.THEME || 'tkw';

console.log("Compiling presentation '" + presentation + "' with theme '" + theme + "'");

const paths = [
  'themes/' + theme + '/start.html',
  presentation + '.html',
  'themes/' + theme + '/end.html'
]
for (let filePath of paths) {
  if (!fs.existsSync(filePath)) {
    console.error(filePath + " does not exist - required");
    process.exit(1);
  }
}

concat(paths, presentation + '.output.html', function(err) {
  if (err) throw err
});
