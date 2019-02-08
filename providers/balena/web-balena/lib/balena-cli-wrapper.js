class BalenaCli {
  constructor (balenaApiKey) {
    this.apiKey = balenaApiKey;
  }

  execBalenaCli(args) {
    return new Promise((resolve, reject) => {
      var { spawn } = require('child_process');
      var command = spawn('balena', args)

      command.stdout.on('data', (data) => {
        console.log(`stdout: \n${data}`);
      });

      command.stderr.on('data', (data) => {
        console.log(`stderr: \n${data}`);
      });

      command.on('close', (code) => {
        console.log(`exit code: \n${code}`);
        if (code != 0) {
          reject();
        }
        resolve();
      });
    });
  }

  async login() {
    var loginArgs = ['login', '--token',  this.apiKey];
    return this.execBalenaCli(loginArgs);
  }

  async logout() {
    var logoutArgs = ['logout'];
    return this.execBalenaCli(logoutArgs);
  }

  async push(appName, srcDir) {
    await this.logout();
    await this.login();
    var pushArgs = ['push', appName, '-s', srcDir]
    return this.execBalenaCli(pushArgs);
  }
}

module.exports = { BalenaCli };
