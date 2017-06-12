class OS {
  constructor(process) {
    this.process = process;
  }

  get platform() {
    return this.process.platform;
  }

  get isWindows() {
    return this.process.platform === 'win32';
  }

  //Todo
  isLinux() {}

  //Todo
  isMac() {}
}

export default OS;