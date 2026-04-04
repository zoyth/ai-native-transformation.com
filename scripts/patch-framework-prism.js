// ABOUTME: Patches a Prism.js regex in the framework bundle that generates invalid Tailwind CSS.
// ABOUTME: Runs as postinstall to fix Turbopack dev server CSS parsing errors.

const fs = require('fs');
const path = require('path');

const files = [
  'dist/components/index.js',
  'dist/components/index.mjs',
];

// Build the search pattern dynamically so Tailwind's scanner
// doesn't pick it up from THIS file.
const BAD_CHAR_CLASS = '[' + '-:=]';
const BAD_ESCAPED = '[' + '\\-:=]';

const frameworkDir = path.resolve(__dirname, '../node_modules/@zoyth/simple-site-framework');
let patched = 0;

for (const file of files) {
  const filePath = path.join(frameworkDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace all occurrences of the problematic character class
  // with a reordered equivalent that Tailwind won't misinterpret.
  while (content.includes(BAD_CHAR_CLASS)) {
    content = content.replace(BAD_CHAR_CLASS, '[=:' + '\\x2D]');
  }
  while (content.includes(BAD_ESCAPED)) {
    content = content.replace(BAD_ESCAPED, '[=:' + '\\x2D]');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    patched++;
  }
}

if (patched > 0) {
  console.log('Patched ' + patched + ' framework file(s) for Tailwind compatibility.');
} else {
  console.log('No files needed patching.');
}
