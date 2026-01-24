const core = require('@actions/core');
 
async function run() { 
  /*
  1. Parse inputs: Base Branch from which to check for updates
  2. Target-branch to use to create the PR
  */
  core.info('I am a custom JS action');
}
 
run();