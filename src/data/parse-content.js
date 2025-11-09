const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../../Portfolio-content-.md'), 'utf-8');

const en = {};
const de = {};

// This is a simplified parser. A more robust solution would use a markdown parser library.
const lines = content.split('\n');

let currentSection = '';
let currentSubSection = '';

lines.forEach(line => {
  if (line.startsWith('## ')) {
    currentSection = line.substring(3).trim().toLowerCase().replace(' / ', '-');
    en[currentSection] = {};
    de[currentSection] = {};
  } else if (line.startsWith('### ')) {
    currentSubSection = line.substring(4).trim().toLowerCase();
    en[currentSection][currentSubSection] = {};
    de[currentSection][currentSubSection] = {};
  } else if (line.startsWith('**English**')) {
    // Handle English content
  } else if (line.startsWith('**Deutsch**')) {
    // Handle German content
  }
});

fs.writeFileSync(path.resolve(__dirname, '../locales/en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.resolve(__dirname, '../locales/de.json'), JSON.stringify(de, null, 2));

console.log('Content parsed successfully!');
