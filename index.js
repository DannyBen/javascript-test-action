const core = require('@actions/core');
const github = require('@actions/github');
const execSync = require('child_process').execSync;

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  // shell command
  const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
  console.log('Output was:\n', output);

} catch (error) {
  core.setFailed(error.message);

}
