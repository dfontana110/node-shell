process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  
  switch(cmd){
    case 'pwd':
      process.stdout.write(process.cwd());
      break;
    default:
      process.stderr.write(`ERROR: cannot handle command ${cmd}`); 
  }
  process.stdout.write('\nprompt > ');

});
