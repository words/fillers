# fillers [![Build Status][travis-badge]][travis]

List of, _like_, English (both British and American) filler words.

## Installation

[npm][]:

```bash
npm install fillers
```

## Usage

```js
var fillers = require('fillers');

fillers.length; //=> 80

console.log(fillers.slice(0, 10));
```

Yields:

```js
[ 'a',
  'able',
  'aboard',
  'about',
  'above',
  'absent',
  'accept',
  'accident',
  'account',
  'ache' ]
```

## API

### `fillers`

_So_, `fillers` exposes a list of strings. (`Array.<string>`).

## Support

For a complete list of supported filler words and phrases, _like_, see
[index.json][data].

Note that the words listed in **fillers** _might_ or, in fact, _might_
not be fillers.

## Related

*   [`buzzwords`](https://github.com/wooorm/buzzwords)
    — List of buzzwords
*   [`dale-chall`](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words (1995)
*   [`hedges`](https://github.com/wooorm/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/wooorm/profanities)
    — List of profane words
*   [`spache`](https://github.com/wooorm/spache)
    — List of simple American-English words (1974)
*   [`weasels`](https://github.com/wooorm/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/fillers.svg

[travis]: https://travis-ci.org/words/fillers

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[data]: index.json
