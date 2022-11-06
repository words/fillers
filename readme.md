# fillers

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of, *like*, English (both British and American) filler words.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`fillers`](#fillers-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes a list of pretty useless words, which are typically used
to fill empty space.

## When should I use this?

Use this when you want to do fun things with natural language.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install fillers
```

In Deno with [`esm.sh`][esmsh]:

```js
import {fillers} from 'https://esm.sh/fillers@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {fillers} from 'https://esm.sh/fillers@2?bundle'
</script>
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

This package exports the identifier `fillers`.
There is no default export.

### `fillers`

*So*, `fillers` exposes a list of strings (`Array<string>`).

## Data

For a complete list of supported filler words and phrases, *like*, see
[`index.js`][data].

Note that the words listed in `fillers` *might* or, in fact, *might* not be
fillers.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`buzzwords`](https://github.com/words/buzzwords)
    — list of buzzwords
*   [`dale-chall`](https://github.com/words/dale-chall)
    — list of familiar American-English words (1995)
*   [`hedges`](https://github.com/words/hedges)
    — list of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — list of profane words
*   [`spache`](https://github.com/words/spache)
    — list of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — list of weasel words

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[data]: index.js
