class Gatling {
  constructor(process, os) {
    this.process = process;
    this.os = os;
    this.process.env.GATLING_USER_DIR = this.userDirAbsolutePath;
  }

  exec(spawn) {
    this.child = spawn(this.gatlingExecutable, this.args);
    this.process.stdin.pipe(this.child.stdin);

    this.child.stdout.on('data', this.stdoutHandler);
    this.child.stderr.on('data', this.stderrHandler);

    this.child.on('exit', this.exitHandler);
  }

  stdoutHandler(data) {
    console.log(`\n${data.toString()}`);
  }

  stderrHandler(data) {
    console.error(`\n${data.toString()}`);
  }

  exitHandler(code) {
    process.exit(code);
  }

  get args() {
    return [
      '-df', `${this.userDirAbsolutePath}/user-files/data`,
      '-rf', `${this.userDirAbsolutePath}/results`,
      '-bdf', `${this.userDirAbsolutePath}/user-files/bodies`,
      '-sf', `${this.userDirAbsolutePath}/user-files/simulations`
    ];
  }

  get cwd() {
    return this.process.cwd();
  }

  get command() {
    return this.os.isWindows === true ? 'gatling.bat' : 'gatling.sh';
  }

  get gatlingExecutable() {
    const fileName = this.command;
    return this.cwd + this.binaryRoot + fileName;
  }

  get binaryRoot() {
    const env = this.process.env.NODE_ENV;
    if (env === 'test' || env === 'development') {
      return '/deps/bin/';
    } else {
      return '/node_modules/gatlingjs/deps/bin/';
    }
  }

  get userDirAbsolutePath() {
    return `${this.cwd}/${this.defaultUserDirRelativePath}`;
  }

  get defaultUserDirRelativePath() {
    return 'test/performance';
  }

}

export default Gatling;