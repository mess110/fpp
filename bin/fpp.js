#!/usr/bin/env node

var concat = require('concat-files');

if (process.env.PRESENTATION === undefined) {
  console.log("PRESENTATION ENV variable required.")
  process.exit(1);
}

var presentation = process.env.PRESENTATION || 'boilerplate';
var theme = process.env.THEME || 'tkw';

console.log("Compiling presentation '" + presentation + "' with theme '" + theme + "'");

concat([
  'themes/' + theme + '/fpp_start.html',
  presentation + '.html',
  'themes/' + theme + '/fpp_end.html'
], presentation + '.output.html', function(err) {
  if (err) throw err
});
