const pwd = () => {
  return process.stdout.write(process.cwd());
};

module.exports = pwd;
