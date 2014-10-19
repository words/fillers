'use strict';

var fs = require('fs'),
    words = require('../data/fillers.json');

fs.writeFileSync('Supported-filler-words.md',
    'Supported Filler-words\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
