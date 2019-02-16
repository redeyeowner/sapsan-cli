const chalk = require('chalk');
const { NewAction } = require('../actions');
const NewCommand = require('./new.command');

module.exports = class CommandLoader {
  static load(program) {
    new NewCommand(new NewAction()).load(program);

    CommandLoader.handleInvalidCommand(program);
  }

  static handleInvalidCommand(program) {
    program.on('command:*', () => {
      console.error(chalk.red('Invalid command: %s'), program.args.join(' '));
      console.log('See --help for a list of available commands.');
      process.exit(1);
    });
  }
};
