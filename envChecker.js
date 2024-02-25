require('dotenv').config();
const execSync = require('child_process').execSync;

// Function to check the versions of Node.js and npm against required versions
function checkVersions(requiredNodeVersion, requiredNpmVersion) {
  const nodeVersion = process.version; // Current Node.js version
  const npmVersion = execSync('npm --version').toString().trim(); // Current npm version

  console.log(`Current Node.js version: ${nodeVersion}`);
  console.log(`Current npm version: ${npmVersion}`);

  // Check Node.js version
  if (nodeVersion < requiredNodeVersion) {
    console.log(`Warning: Required Node.js version is ${requiredNodeVersion}, but your version is ${nodeVersion}`);
  } else {
    console.log('Node.js version check passed');
  }

  // Check npm version
  if (npmVersion < requiredNpmVersion) {
    console.log(`Warning: Required npm version is ${requiredNpmVersion}, but your version is ${npmVersion}`);
  } else {
    console.log('npm version check passed');
  }
}

// Function to check NODE_ENV environment variable
function checkNodeEnv() {
  const nodeEnv = process.env.NODE_ENV;
  if (!nodeEnv) {
    console.warn('Warning: NODE_ENV is not set. It is recommended to set this variable to "development", "production", or "test".');
  } else {
    console.log(`NODE_ENV is set to ${nodeEnv}.`);
  }
}

module.exports = {
  checkVersions,
  checkNodeEnv,
};
