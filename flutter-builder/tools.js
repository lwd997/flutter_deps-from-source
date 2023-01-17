const fs = require('fs')
const util = require('util')
const  process = require('process')
const config = require('./config')
const exec = util.promisify(require('child_process').exec)

const runBash = async (commands) => {
    if (!commands || !commands.length) return;
    try {
        for (const command of commands) {
            console.log('started task: ' + command);
            const { stdout, stderr } = await exec(command);
            if (stderr) {
                console.error('\x1b[33m',stderr)
                console.log('\x1b[0m', '');

            }
            console.log(stdout);
        }

    } catch (err) {
        console.error('\x1b[43m',err)
        console.log('\x1b[0m', '');
    }
}

const terminate = (message) => {
    console.error(message)
    process.exit(1)
}

const deleteFolder = async (path) => {
    await runBash(['rm -r ' + path])
};

const moveFolder = async (src, destination, dir = config.gtkPath) => {

    if (fs.existsSync(`${dir}/${destination}`)) await deleteFolder(`${dir}/${destination}`);

    await runBash([`cp -r ${config.src}/${src} ${dir}/${destination}`])
};

module.exports = {runBash, terminate, moveFolder}