'use strict';

/**
 * Dependencies.
 */

var fillers,
    assert;

fillers = require('./');
assert = require('assert');

/**
 * Tests.
 */

describe('fillers', function () {
    it('should be an `Object`', function () {
        assert(typeof fillers === 'object');
    });
});

describe('fillers.is(word)', function () {
    it('should return true if a word is a filler', function () {
        assert(fillers.is('like') === true);
    });

    it('should return false if a word is not a filler', function () {
        assert(fillers.is('unicorn') === false);
    });
});

describe('fillers.all()', function () {
    var all;

    all = fillers.all();

    it('should return an array', function () {
        assert('length' in all);

        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        all.forEach(function (value) {
            assert(value.toLowerCase() === value);
        });
    });

    it('every entry should only occur once', function () {
        all.forEach(function (value, index) {
            assert(all.indexOf(value, index + 1) === -1);
        });
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(fillers.all().indexOf('unicorn') === -1);
    });
});

describe('fillers.add(filler) and fillers.remove(filler)', function () {
    it('should add and remove a filler', function () {
        assert(fillers.is('unicorn') === false);

        fillers.add('unicorn');

        assert(fillers.is('unicorn') === true);

        fillers.remove('unicorn');

        assert(fillers.is('unicorn') === false);
    });

    it('should add and remove multiple fillers', function () {
        assert(fillers.is('unicorn') === false);
        assert(fillers.is('rainbow') === false);

        fillers.add('unicorn', 'rainbow');

        assert(fillers.is('unicorn') === true);
        assert(fillers.is('rainbow') === true);

        fillers.remove('unicorn', 'rainbow');

        assert(fillers.is('unicorn') === false);
        assert(fillers.is('rainbow') === false);
    });

    it('should fail silently when removing a non-existing filler',
        function () {
            assert(fillers.is('unicorn') === false);

            fillers.remove('unicorn');

            assert(fillers.is('unicorn') === false);
        }
    );
});
