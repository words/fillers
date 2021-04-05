# fillers

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of, *like*, English (both British and American) filler words.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install fillers
```

## Use

```js
import {fillers} from 'fillers'

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

This package exports the following identifiers: `fillers`.
There is no default export.

### `fillers`

*So*, `fillers` exposes a list of strings (`Array.<string>`).

## Support

For a complete list of supported filler words and phrases, *like*, see
[`index.js`][data].

Note that the words listed in **fillers** *might* or, in fact, *might* not be
fillers.

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

[build-badge]: https://github.com/words/fillers/workflows/main/badge.svg

[build]: https://github.com/words/fillers/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/fillers.svg

[coverage]: https://codecov.io/github/words/fillers

[downloads-badge]: https://img.shields.io/npm/dm/fillers.svg

[downloads]: https://www.npmjs.com/package/fillers

[size-badge]: https://img.shields.io/bundlephobia/minzip/fillers.svg

[size]: https://bundlephobia.com/result?p=fillers

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[data]: index.js
