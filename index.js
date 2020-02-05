const core = require('@actions/core');
const github = require('@actions/github');
const execSync = require('child_process').execSync;

try {
  const command = core.getInput('command');
  console.log(execSync(command, { encoding: 'utf-8' }));

} catch (error) {
  core.setFailed(error.message);

}
