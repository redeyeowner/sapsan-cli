const { join } = require('path');
const AbstractRunner = require('./abstruct.runner');

module.exports = class SchematicRunner extends AbstractRunner {
  constructor() {
    super(`"${join(__dirname, '../..', 'node_modules/.bin/schematics')}"`);
  }
}
