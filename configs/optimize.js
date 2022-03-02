const fs = require('fs');
const path = require('path');

const configsLocation = __dirname;

const projectLocation = path.dirname(configsLocation);

const tizenAppLocation = path.join(projectLocation, '/tizen');

console.log('removing unnecessary files');

fs.rmSync(`${tizenAppLocation}/asset-manifest.json`, { recursive: true });
fs.rmSync(`${tizenAppLocation}/manifest.json`, { recursive: true });
fs.rmSync(`${tizenAppLocation}/robots.txt`, { recursive: true });

console.log('unnecessary files removed successfully');