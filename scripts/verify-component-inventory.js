'use strict';
/* eslint-env node */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'src', 'index.js');
const inventoryPath = path.join(root, 'COMPONENTS.md');
const source = fs.readFileSync(sourcePath, 'utf8');
const inventory = fs.readFileSync(inventoryPath, 'utf8');

const importPattern = /^import\s+([A-Za-z][A-Za-z0-9]*)\s+from\s+'\.\/components\/([^']+)';$/gm;
const components = [];
let match;

while ((match = importPattern.exec(source)) !== null) {
    components.push({ name: match[1], directory: match[2] });
}

if (components.length === 0) {
    throw new Error('No public component imports were found in src/index.js');
}

const seenNames = new Set();
const seenDirectories = new Set();
const errors = [];

components.forEach(component => {
    if (seenNames.has(component.name)) {
        errors.push(`Duplicate public import name: ${component.name}`);
    }
    if (seenDirectories.has(component.directory)) {
        errors.push(`Duplicate public component directory: ${component.directory}`);
    }
    seenNames.add(component.name);
    seenDirectories.add(component.directory);

    const entryPoint = path.join(root, 'src', 'components', component.directory, 'index.js');
    if (!fs.existsSync(entryPoint)) {
        errors.push(`${component.name} has no entry point at src/components/${component.directory}/index.js`);
    }
});

const startMarker = '<!-- component-inventory:start -->';
const endMarker = '<!-- component-inventory:end -->';
const start = inventory.indexOf(startMarker);
const end = inventory.indexOf(endMarker);

if (start === -1 || end === -1 || end <= start) {
    errors.push('COMPONENTS.md is missing valid component inventory markers');
} else {
    const documented = inventory
        .slice(start + startMarker.length, end)
        .split(/\r?\n/)
        .map(line => /^- ([A-Za-z][A-Za-z0-9]*) \(`([^`]+)`\)$/.exec(line.trim()))
        .filter(Boolean)
        .map(item => ({ name: item[1], directory: item[2] }));

    const expected = components
        .slice()
        .sort((left, right) => left.name.localeCompare(right.name));

    if (JSON.stringify(documented) !== JSON.stringify(expected)) {
        errors.push('COMPONENTS.md does not match the public component imports in src/index.js');
    }
}

if (errors.length > 0) {
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
}

console.log(`Verified ${components.length} public component entry points and COMPONENTS.md.`);
