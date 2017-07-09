#!/usr/bin/env node

const fs = require('fs');
const postcss = require('postcss');
const base64 = require('postcss-base64');

var opts = {
  extensions: ['.png', '.jpg', '.jpeg', '.gif']
};

var theme = process.env.THEME || 'tkw';
console.log("Converting background url to inline base64 with theme '" + theme + "'");

var filePath = 'themes/' + theme + '/style.css';

if (!fs.existsSync(filePath)) {
  console.error(filePath + " does not exist - required");
  process.exit(1);
}

src = fs.readFileSync(filePath);
output = postcss().use(base64(opts)).process(src).css;
fs.writeFileSync('themes/' + theme + '/style.64.css', output);
