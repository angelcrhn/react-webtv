// Don't use exec use spawn for live output
// https://stackoverflow.com/questions/10232192/exec-display-stdout-live
const { exec } = require('child_process');

require('dotenv').config()

const cmd = `tizen install -s emulator-26101 -n tizen.wgt -- tizen/.buildResult`
console.log('executing')

exec(cmd, (err, stdout, stderr)=> {
    err ? console.log(err) : 0
    stdout ? console.log(stdout) : 0
    stderr ? console.log(stderr) : 0
})
     
  