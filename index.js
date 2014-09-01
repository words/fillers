'use strict';

var words, Interface;

words = require('./data/fillers.json');
Interface = require('datalist-interface');

module.exports = new Interface(words);
