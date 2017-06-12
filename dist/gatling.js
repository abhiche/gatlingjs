#! /usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gatling = function () {
  function Gatling(process, os) {
    _classCallCheck(this, Gatling);

    this.process = process;
    this.os = os;
    this.process.env.GATLING_USER_DIR = this.userDirAbsolutePath;
  }

  _createClass(Gatling, [{
    key: 'exec',
    value: function exec(spawn) {
      this.child = spawn(this.gatlingExecutable, this.args);
      this.process.stdin.pipe(this.child.stdin);

      this.child.stdout.on('data', this.stdoutHandler);
      this.child.stderr.on('data', this.stderrHandler);

      this.child.on('exit', this.exitHandler);
    }
  }, {
    key: 'stdoutHandler',
    value: function stdoutHandler(data) {
      console.log('\n' + data.toString());
    }
  }, {
    key: 'stderrHandler',
    value: function stderrHandler(data) {
      console.error('\n' + data.toString());
    }
  }, {
    key: 'exitHandler',
    value: function exitHandler(code) {
      process.exit(code);
    }
  }, {
    key: 'args',
    get: function get() {
      return ['-df', this.userDirAbsolutePath + '/user-files/data', '-rf', this.userDirAbsolutePath + '/results', '-bdf', this.userDirAbsolutePath + '/user-files/bodies', '-sf', this.userDirAbsolutePath + '/user-files/simulations'];
    }
  }, {
    key: 'cwd',
    get: function get() {
      return this.process.cwd();
    }
  }, {
    key: 'command',
    get: function get() {
      return this.os.isWindows === true ? 'gatling.bat' : 'gatling.sh';
    }
  }, {
    key: 'gatlingExecutable',
    get: function get() {
      var fileName = this.command;
      return this.cwd + this.binaryRoot + fileName;
    }
  }, {
    key: 'binaryRoot',
    get: function get() {
      var env = this.process.env.NODE_ENV;
      if (env === 'test' || env === 'development') {
        return '/deps/bin/';
      } else {
        return '/node_modules/gatlingjs/deps/bin/';
      }
    }
  }, {
    key: 'userDirAbsolutePath',
    get: function get() {
      return this.cwd + '/' + this.defaultUserDirRelativePath;
    }
  }, {
    key: 'defaultUserDirRelativePath',
    get: function get() {
      return 'test/performance';
    }
  }]);

  return Gatling;
}();

exports.default = Gatling;