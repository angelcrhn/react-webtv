const { exec } = require('child_process');

require('dotenv').config()

// TODO: Check if there is a way to take a list of certicate names
const cmd = `tizen package -t wgt -s ${process.env.CERTIFICATE_NAME} -- tizen/.buildResult`
console.log('executing')

exec(cmd, (err, stdout, stderr)=> {
    err ? console.log(err) : 0
    stdout ? console.log(stdout) : 0
    stderr ? console.log(stderr) : 0
})
     
  