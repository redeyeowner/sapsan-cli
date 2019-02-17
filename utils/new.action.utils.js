module.exports.askForMissingInformation = function (questions, options) {
  const {
    inquirer,
    messages,
  } = options;
  console.info();
  console.info(messages.PROJECT_INFORMATION_START);
  console.info(messages.ADDITIONAL_INFORMATION);
  console.info();

  const prompt = inquirer.createPromptModule();
  const answers = await prompt(questions);

  console.info();
  console.info(messages.PROJECT_INFORMATION_COLLECTED);
  console.info();
  return answers;
};

module.exports.replaceInputMissingInformation = function (inputs, answers) {
  return inputs.map(
    input =>
      (input.value =
        input.value !== undefined ? input.value : answers[input.name]),
  );
};
