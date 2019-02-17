const { DEFAULT_ANSWERS } = require('../constants');

module.exports.generateQuestionsForMissingInputs = generateQuestionsForMissingInputs;
module.exports.generateApplicationFiles = generateApplicationFiles;

function generateQuestionsForMissingInputs(inputs, generateInput) {
  return inputs
    .map(input =>
      generateInput(input.name)(input.value)(generateDefaultAnswer(input.name)),
    )
    .filter(question => question !== undefined);
}

function generateDefaultAnswer(name) {
  return DEFAULT_ANSWERS[name] || '';
};

async function generateApplicationFiles(args, options, injections) {
  const {
    isDryRunEnabled,
    CollectionFactory,
    Collection,
    SchematicOption,
  } = injections;
  const collection = CollectionFactory.create(
    Collection.SAPSAN,
  );
  const schematicOptions = mapSchematicOptions(args.concat(options), {
    SchematicOption,
  });
  await collection.execute('application', schematicOptions);

  if (!isDryRunEnabled) {
    await generateConfigurationFile(args, options, collection, {
      SchematicOption,
    });
  }
  console.info();
};

function mapSchematicOptions(options, injections) {
  const {
    SchematicOption,
  } = injections;
  return options.reduce((schematicOptions, option) => {
    if (
      option.name !== 'skip-install' &&
      option.value !== 'package-manager'
    ) {
      schematicOptions.push(new SchematicOption(option.name, option.value));
    }
    return schematicOptions;
  }, []);
};

async function generateConfigurationFile(args, options, collection, injections) {
  const {
    SchematicOption,
  } = injections;
  const schematicOptions = mapConfigurationSchematicOptions(
    args.concat(options),
  );
  schematicOptions.push(
    new SchematicOption('collection', '@sapsan/schematics'),
  );
  await collection.execute('configuration', schematicOptions);
};
