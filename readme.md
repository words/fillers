# fillers [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

List of, _like_, English (both British and American) filler words.

## Installation

[npm][npm-install]:

```bash
npm install fillers
```

**fillers** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var fillers = require('fillers');

fillers.length; // 80

console.log(fillers.slice(0, 10));
```

Yields:

```json
[
  "absolutely",
  "actual",
  "actually",
  "anyway",
  "apparently",
  "approximately",
  "badly",
  "basically",
  "begin",
  "certainly"
]
```

## API

### `fillers`

**Type**: `Array.<string>` — _So_, **fillers** exposes a list of strings.

## Support

For a complete list of supported filler words and phrases, _like_, see
[Support.md][support].

Note that the words listed in **fillers** _might_ or, in fact, _might_ not be
fillers.

## Related

*   [buzzwords](https://github.com/wooorm/buzzwords)
    — List of buzzwords;

*   [dale-chall](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words (1995);

*   [hedges](https://github.com/wooorm/hedges)
    — List of hedge words;

*   [profanities](https://github.com/wooorm/profanities)
    — List of profane words;

*   [spache](https://github.com/wooorm/spache)
    — List of simple American-English words (1974);

*   [weasels](https://github.com/wooorm/weasels)
    — List of weasel words.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/fillers.svg

[travis]: https://travis-ci.org/wooorm/fillers

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/fillers.svg

[codecov]: https://codecov.io/github/wooorm/fillers

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/fillers/releases

[license]: LICENSE

[support]: support.md

[author]: http://wooorm.com
