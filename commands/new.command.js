module.exports = class NewCommand {
  constructor(action) {
    this.action = action;
  }

  load(program) {
    program
      .command('new [name] [description] [version] [author]')
      .alias('n')
      .description('Generate a new Sapsan application.')
      .option('-s, --skip-install', 'Allow to skip package installation.')
      .option(
        '-p, --package-manager [package-manager]',
        'Allow to specify package manager to skip package-manager selection.',
      )
      .action(
        async (
          name,
          description,
          version,
          author,
          command,
        ) => {
          const options = [];
          options.push({ name: 'skip-install', value: !!command.skipInstall });
          options.push({
            name: 'package-manager',
            value: command.packageManager,
          });

          const inputs = [];
          inputs.push({ name: 'name', value: name });
          inputs.push({ name: 'description', value: description });
          inputs.push({ name: 'version', value: version });
          inputs.push({ name: 'author', value: author });

          await this.action.handle(inputs, options);
        },
      );
  }
}
