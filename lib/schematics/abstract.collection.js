module.exports = class AbstractCollection {
  constructor(collection, runner) {
    this.collection = collection;
    this.runner = runner;
  }

  async execute(name, options) {
    const command = this.buildCommandLine(name, options);
    await this.runner.run(command);
  }

  buildCommandLine(name, options) {
    return `${this.collection}:${name}${this.buildOptions(options)}`;
  }

  buildOptions(options) {
    return options.reduce((line, option) => {
      return line.concat(` ${option.toCommandString()}`);
    }, '');
  }
}