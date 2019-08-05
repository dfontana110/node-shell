const pwd = require('./pwd.js');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline

  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    default:
      process.stderr.write(`ERROR: cannot handle command ${cmd}`);
  }
  process.stdout.write('\nprompt > ');
});
