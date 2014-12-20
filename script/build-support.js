'use strict';

/**
 * Dependencies.
 */

var fs,
    fillers;

fs = require('fs');
fillers = require('..');

/**
 * Write.
 */

fs.writeFileSync('Supported-words.md',
    'Supported words\n' +
    '=================\n' +
    '\n' +

    fillers.all().map(function (filler) {
        return '* “' + filler + '”';
    }).join(';\n') +

    '.\n'
);
