const os = require('os')

const config = {
    user: os.userInfo().username,
    home: os.userInfo().homedir,
    // gtkPath: os.userInfo().homedir + '/gtk-files',
    // src: os.userInfo().homedir + '/gtk-src',
    addToPath: 1
}

module.exports = config