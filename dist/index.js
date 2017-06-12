#! /usr/bin/env node
'use strict';

var _gatling = require('./gatling');

var _gatling2 = _interopRequireDefault(_gatling);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

var _os = require('./utils/os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gatling = new _gatling2.default(process, new _os2.default(process));
gatling.exec(_child_process2.default.spawn);