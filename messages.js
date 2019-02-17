const chalk = require('chalk');

module.exports.messages = {
  PROJECT_INFORMATION_START: 'Creating your Sapsan project...',
  ADDITIONAL_INFORMATION: 'We have to collect additional information:',
  PROJECT_INFORMATION_COLLECTED: 'Thank you for your time!',
  DRY_RUN_MODE: 'Command has been executed in the dry mode, nothing changed!',
  RUNNER_EXECUTION_ERROR: command => `Failed to execute command: ${command}`,
  PACKAGE_MANAGER_QUESTION: 'Which package manager would you to use?',
  PACKAGE_MANAGER_INSTALLATION_IN_PROGRESS: 'Installation in progress...',
  PACKAGE_MANAGER_UPDATE_IN_PROGRESS: 'Installation in progress...',
  PACKAGE_MANAGER_UPGRADE_IN_PROGRESS: 'Installation in progress...',
  GIT_INITIALIZATION_ERROR: 'Git repository has not been initialized',
  PACKAGE_MANAGER_INSTALLATION_SUCCEED: name =>
    `Successfully created project ${chalk.green(name)}`,
  GET_STARTED_INFORMATION: 'Get started with the following commands:',
  CHANGE_DIR_COMMAND: name => `$ cd ${name}`,
  START_COMMAND: name => `$ ${name} run start`,
  PACKAGE_MANAGER_INSTALLATION_FAILED:
    'Packages installation failed, see above',
  SAPSAN_INFORMATION_PACKAGE_MANAGER_FAILED:
    'cannot read your project package.json file, are you inside your project directory?',
};
