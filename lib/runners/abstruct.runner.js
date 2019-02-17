const chalk = requre('chalk');
const { spawn } = require('child_process');
const { messages } = require('../../messages');

module.exports = class AbstractRunner {
  constructor(binary) {
    this.binary = binary;
  }

  async run(command, collect, cwd = process.cwd()) {
    const args = [command];
    const options = {
      cwd,
      stdio: collect ? 'pipe' : 'inherit',
      shell: true,
    };
    return new Promise((resolve, reject) => {
      const child = spawn(`${this.binary}`, args, options);
      if (collect) {
        child.stdout.on('data', data =>
          resolve(data.toString().replace(/\r\n|\n/, '')),
        );
      }
      child.on('close', code => {
        if (code === 0) {
          resolve(null);
        } else {
          console.error(
            chalk.red(
              messages.RUNNER_EXECUTION_ERROR(`${this.binary} ${command}`),
            ),
          );
          reject();
        }
      });
    });
  }
};
