const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// DRY >.<
const xml2js = require('xml2js');

const configsLocation = __dirname;

const projectLocation = path.dirname(configsLocation);

const tizenAppLocation = path.join(projectLocation, '/tizen');


let src = null; //for simulator
let appId = null // for emulator
let configXml = path.resolve(tizenAppLocation, `config.xml`);
let orignalXml = fs.readFileSync(configXml, {encoding: 'utf-8'});
xml2js.parseString(orignalXml, (err, jsonTemp) => {
    if (jsonTemp.widget.content == undefined) {
        return;
    }

    appId = jsonTemp.widget['tizen:application'][0].$.id
    src = jsonTemp.widget.content[0].$.src;
});

const cmd = `tizen run -s emulator-26101 -p ${appId}`

exec(cmd, (err, stdout, stderr)=> {
    err ? console.log(err) : 0
    stdout ? console.log(stdout) : 0
    stderr ? console.log(stderr) : 0
})


// console.log(appId);
// let pathtosrc = src ? path.resolve(tizenAppLocation, src) : null;
// console.log(pathtosrc)