const core = require('@actions/core');
const github = require('@actions/github');
const execSync = require('child_process').execSync;

try {
  const script = core.getInput('script');
  const repo = core.getInput('repo');
  const command = `bash <(curl -s https://raw.githubusercontent.com/${repo}/master/${script})`;

  console.log(execSync(command, { encoding: 'utf-8' }));

} catch (error) {
  core.setFailed(error.message);

}
