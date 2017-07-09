'use strict';

var test = require('tape');
var fillers = require('./');

test('fillers', function (t) {
  t.equal(typeof fillers, 'object', 'should be an array #1');
  t.equal(Array.isArray(fillers), true, 'should be an array #2');
  t.notEqual(fillers.indexOf('basically'), -1, 'should contain words');

  t.end();
});
