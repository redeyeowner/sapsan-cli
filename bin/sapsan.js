#!/usr/bin/env node
const commander = require('commander');
const CommandLoader = require('../commands');

const bootstrap = () => {
  const program = commander;
  program.version(require('../package.json').version);
  CommandLoader.load(program);
  commander.parse(process.argv);

  if (!program.args.length) {
  	program.outputHelp();
  }
};

bootstrap();