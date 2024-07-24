const { execSync } = require('child_process');

test('builds without error', () => {
  execSync('yarn build', { stdio: 'inherit' });
});
