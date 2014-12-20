# fillers [![Build Status](https://img.shields.io/travis/wooorm/fillers.svg?style=flat)](https://travis-ci.org/wooorm/fillers) [![Coverage Status](https://img.shields.io/coveralls/wooorm/fillers.svg?style=flat)](https://coveralls.io/r/wooorm/fillers?branch=master)

List of, _like_, English (both British and American) filler words.

## Installation

npm:
```sh
$ npm install fillers
```

Component.js:
```sh
$ component install wooorm/fillers
```

## Usage

```js
var fillers = require('fillers');

fillers.is('like'); // true
fillers.is('fillers'); // false

fillers.add('unicorn');
fillers.is('unicorn'); // true

fillers.remove('unicorn');
fillers.is('unicorn'); // false
```

## API

_So_, **fillers** exports the following functions:

### fillers.is(word)

Returns whether (true) or not (false) a given word is _simply_ a filler word.

### fillers.add(word...)

Adds all arguments to the internal database, _obviously_.
Given values are **NOT** validated.

### fillers.remove(word...)

_Frankly_, removes all arguments from the internal database.
Given values are **NOT** validated.

### fillers.all()

_Basically_, return the values (as an Array) in the internal database.

## Supported words

For a complete list of supported filler words and phrases, _like_, see [Supported-words.md](Supported-words.md).

Note that the words listed in **fillers** _might_ or, in fact, _might_ not be fillers.

## Related

- [buzzwords](https://github.com/wooorm/buzzwords) — List of buzzwords;
- [hedges](https://github.com/wooorm/hedges) — List of hedge words;
- [profanities](https://github.com/wooorm/profanities) — List of profane words;
- [weasels](https://github.com/wooorm/weasels) — List of weasel words.

## License

MIT © [Titus Wormer](http://wooorm.com)
