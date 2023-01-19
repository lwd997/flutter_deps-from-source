const os = require('os')

const config = {
    user: os.userInfo().username,
    home: os.userInfo().homedir,
}

module.exports = config