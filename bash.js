const pwd = require('./pwd.js');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  let cmd = data
    .toString()
    .trim()
    .split(' ');
  switch (cmd.shift()) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(cmd);
      break;
    case 'curl':
      curl(cmd[0]);
      break;
    default:
      process.stderr.write(`ERROR: cannot handle command ${cmd}`);
      break;
  }
  process.stdout.write('\nprompt > ');
});
