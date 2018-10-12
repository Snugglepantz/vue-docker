"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _hello = require("./controller/hello");

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    serverPort = process.env.PORT || 9095;

app.use(_express2.default.static('public'));

app.use('/api/hello', _hello2.default);

app.listen(serverPort);