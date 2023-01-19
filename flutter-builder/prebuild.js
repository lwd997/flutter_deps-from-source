const fs = require('fs')
const config = require('./config')
const {terminate} = require('./tools')

config.gtkPath = config.home + '/gtk'

for (const arg of process.argv) {
    if (arg.includes('--src=')) config.src = arg.split('=')[1]
    else if (arg.includes('--prefix=')) config.gtkPath = arg.split('=')[1]
}

fs.readFile(`${config.home}/.bashrc`, (err, content) => {
    if (err) terminate(err)

    fs.writeFile(
        `${config.home}/.bashrc`,
        `${content.toString()}\nexport PATH="$PATH:${config.gtkPath}/bin"\nexport PATH="$PATH:${config.home}/java/bin"\nexport PATH="$PATH:${config.home}/flutter/bin"\nexport PATH="$PATH:${config.home}/ninja-linux"\nexport PATH="$PATH:${config.home}/clang/bin"\nexport PATH="$PATH:${config.home}/cmake/bin"\nexport PKG_CONFIG_PATH="$PKG_CONFIG_PATH:${config.gtkPath}/lib/pkgconfig"\nexport PKG_CONFIG_PATH="$PKG_CONFIG_PATH:${config.gtkPath}/share/pkgconfig"\nexport LD_LIBRARY_PATH="$LD_LIBRARY_PATH:${config.gtkPath}/lib"\nexport LIBFFI_CFLAGS="-I${config.gtkPath}/include"\nexport LIBFFI_LIBS="-L${config.gtkPath}/lib -lffi"\n`,
        (err) => {
            if (err) console.error(err)
        }
    )
})