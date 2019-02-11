var { spawn } = require('child_process');

function gitClone(url) {
  return new Promise((resolve, reject) => {
    var command = spawn('git', ['clone', url, 'tmp'])
    command.on('close', (code) => {
      if (code != 0) {
        reject();
      }
      resolve();
    });
  });
}

function rmTmpDir() {
  return new Promise((resolve, reject) => {
    var command = spawn('rm', ['-rf', 'tmp'])
    command.on('close', (code) => {
      if (code != 0) {
        reject();
      }
      resolve();
    });
  });
}

module.exports = { gitClone, rmTmpDir}
