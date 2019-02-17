const AbstractRunner = require('./abstruct.runner');

module.exports = class NpmRunner extends AbstractRunner {
  constructor() {
    super('git');
  }
}
