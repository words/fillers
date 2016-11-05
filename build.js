'use strict';

/* Dependencies. */
var fs = require('fs');
var toJSON = require('plain-text-data-to-json');

/* Read. */
var doc = fs.readFileSync('data.txt', 'utf8');

/* Transform. */
var data = JSON.stringify(toJSON(doc), null, 2) + '\n';

/* Write. */
fs.writeFileSync('index.json', data);
