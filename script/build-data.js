'use strict';

var fs, textToJSON, data;

fs = require('fs');
textToJSON = require('plain-text-data-to-json');

data = textToJSON(fs.readFileSync('data/fillers.txt', 'utf8'));

data.forEach(function (word) {
    if (word.toLowerCase() !== word) {
        throw new Error(
            'Mixed-case entry `' + word + '`. ' +
            'Please ensure all entries are lower case.'
        );
    }
});

fs.writeFileSync('data/fillers.json', JSON.stringify(data, null, 2));
