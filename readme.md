# fillers

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of, *like*, English (both British and American) filler words.

## Installation

[npm][]:

```bash
npm install fillers
```

## Usage

```js
var fillers = require('fillers')

console.log(fillers.length) //=> 80

console.log(fillers.slice(0, 10))
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

*So*, `fillers` exposes a list of strings. (`Array.<string>`).

## Support

For a complete list of supported filler words and phrases, *like*, see
[index.json][data].

Note that the words listed in **fillers** *might* or, in fact, *might*
not be fillers.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — List of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — List of familiar American-English words (1995)
*   [`hedges`](https://github.com/words/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — List of profane words
*   [`spache`](https://github.com/words/spache)
    — List of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/fillers.svg

[build]: https://travis-ci.org/words/fillers

[downloads-badge]: https://img.shields.io/npm/dm/fillers.svg

[downloads]: https://www.npmjs.com/package/fillers

[size-badge]: https://img.shields.io/bundlephobia/minzip/fillers.svg

[size]: https://bundlephobia.com/result?p=fillers

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[data]: index.json
