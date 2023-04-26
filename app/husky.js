const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

if (fs.existsSync(path.resolve('../.husky'))) {
  console.log('Setting up husky');
  execSync('npm run husky:init', { stdio: 'inherit' });
} else {
  console.log('Skipping husky');
}
