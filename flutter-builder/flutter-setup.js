const fs = require('fs')
const config = require('./config')
const {runBash} = require('./tools')

config.src = config.home + '/flutter-src'

const gradleSetup = async () => {
    
    await runBash([`rm -r ${config.home}/.gradle`])
    
    await fs.mkdir(config.home + '/.gradle', { recursive: true }, (err) => {
        if (err) console.log(err);
    })
    await runBash([
        `cp -r ${config.src}/caches ${config.home}/.gradle`,
        `mkdir -p ${config.home}/.gradle/wrapper/dists/gradle-7.4-all/aadb4xli5jkdsnukm30eibyiu`,
        `cp ${config.src}/gradle-7.4-all.zip ${config.home}/.gradle/wrapper/dists/gradle-7.4-all/aadb4xli5jkdsnukm30eibyiu`
    ])
}

const javaSetup = async () => {
    await runBash([`rm -r ${config.home}/java`])
    await runBash([`cp -r ${config.src}/openjdk-11.0.2_linux-x64_bin/jdk-11.0.2 ${config.home}/java`])
}

const flutterSetup = async () => {
    await runBash([`rm -r ${config.home}/flutter`])
    await runBash([`cp -r ${config.src}/flutter_linux_3.3.10-stable/flutter ${config.home}/flutter`])


}

const setup  = async () => {
    await gradleSetup()
    await javaSetup()
    await flutterSetup()
    console.log('flutter setup done');
}
setup()
