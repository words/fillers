'use strict';

/**
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/**
 * Data.
 */

var words;

words = require('./data/fillers.json');

/**
 * Expose fillers.
 */

module.exports = new Interface(words);
