const chalk = require('chalk');
const {
  RUNNERS,
  RUNNERS_NAMES,
} = require('./runner.constants');

module.exports = class RunnerFactory {
  static create(runner) {
    if (!Object.values(RUNNERS_NAMES).includes(runner)) {
      console.info(chalk.yellow(`[WARN] Unsupported runner: ${runner}`));
    }
    return RUNNERS[runner];
  }
}
