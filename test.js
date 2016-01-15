/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module retext:fillers
 * @fileoverview Test suite for `fillers`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var fillers = require('./');

/*
 * Tests.
 */

test('fillers', function (t) {
    t.equal(typeof fillers, 'object', 'should be an array #1');
    t.equal(Array.isArray(fillers), true, 'should be an array #2');
    t.notEqual(fillers.indexOf('basically'), -1, 'should contain words');
    t.end();
});
