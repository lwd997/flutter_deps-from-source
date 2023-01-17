const fs = require('fs')
const readline = require('readline')
const {runBash} = require('./flutter-builder/tools')
const config = require('./flutter-builder/config')

const fileStream = fs.createReadStream('links.txt');

const reader = readline.createInterface({input: fileStream})


reader.on('line', (line) => {
    // if (line && typeof line === 'string' && line.length && line.includes('http')) {
        runBash([`wget ${line.trim()} --show-progress -q --directory-prefix=${config.home}/flutter-src-archived`])
    // } 
    
})


