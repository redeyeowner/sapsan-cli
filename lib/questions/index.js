module.exports.generateInput = (name) => {
  return (value) => {
    if (value === undefined) {
      return (defaultAnswer) => ({
        type: 'input',
        name,
        message: `${name}:`,
        default: defaultAnswer,
      });
    }

    return (defaultAnswer) => undefined;
  };
};

module.exports.generateSelect = (name) => {
  return (message) => {
    return (choices) => ({
      type: 'list',
      name,
      message,
      choices,
    });
  };
};