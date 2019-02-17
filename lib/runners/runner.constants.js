const NpmRunner = require('./npm.runner');
const SchematicRunner = require('./schematic.runner');;
const YarnRunner = require('./yarn.runner');

const RUNNERS_NAMES = {
  SCHEMATIC: 'SCHEMATIC',
  NPM: 'NPM',
  YARN: 'YARN',
};

module.exports.RUNNERS_NAMES = RUNNERS_NAMES;
module.exports.RUNNERS = {
  [RUNNERS_NAMES.SCHEMATIC]: new SchematicRunner(),
  [RUNNERS_NAMES.NPM]: new NpmRunner(),
  [RUNNERS_NAMES.YARN]: new YarnRunner(),
};
