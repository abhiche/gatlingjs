#! /usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OS = function () {
  function OS(process) {
    _classCallCheck(this, OS);

    this.process = process;
  }

  _createClass(OS, [{
    key: 'isLinux',


    //Todo
    value: function isLinux() {}

    //Todo

  }, {
    key: 'isMac',
    value: function isMac() {}
  }, {
    key: 'platform',
    get: function get() {
      return this.process.platform;
    }
  }, {
    key: 'isWindows',
    get: function get() {
      return this.process.platform === 'win32';
    }
  }]);

  return OS;
}();

exports.default = OS;