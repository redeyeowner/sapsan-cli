module.exports = class NewAction {
  async handle(inputs, options) {
    console.log('inputs :: ', inputs);
    console.log('options :: ', options);
  }
}

function generateQuestionsForMissingInputs(inputs) {
  return inputs
    .map(input =>
      generateInput(input.name)(input.value)(generateDefaultAnswer(input.name)),
    )
    .filter(question => question !== undefined);
}

function generateDefaultAnswer(name) {
  const switchObject = {
    name: 'sapsanjs-app-name',
    description: 'description',
    version: '0.0.0',
    author: '',
  }
  return switchObject[name] || '';
};
