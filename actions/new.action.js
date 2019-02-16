module.exports = class NewAction {
  async handle(inputs, options) {
    console.log('inputs :: ', inputs);
    console.log('options :: ', options);
  }
}
