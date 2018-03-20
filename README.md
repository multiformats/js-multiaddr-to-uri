# multiaddr-to-stupid-string

[![Build Status](https://travis-ci.org/tableflip/multiaddr-to-stupid-string.svg?branch=master)](https://travis-ci.org/tableflip/multiaddr-to-stupid-string) [![dependencies Status](https://david-dm.org/tableflip/multiaddr-to-stupid-string/status.svg)](https://david-dm.org/tableflip/multiaddr-to-stupid-string) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


> Convert a Multiaddr to a stupid string /dnsaddr/ipfs.io/http -> http://ipfs.io

## Install

```sh
npm install multiaddr-to-stupid-string
```

## Usage

```js
const toStupid = require('multiaddr-to-stupid-string')

console.log(toStupid('/dnsaddr/protocol.ai/https'))
// -> https://protocol.ai
```

Note:

* Might be lossy - e.g. a DNSv6 multiaddr
* Can throw if the passed multiaddr:
    * is not a valid multiaddr
    * is not supported as a stupid string e.g. circuit

## Contribute

Feel free to dive in! [Open an issue](https://github.com/tableflip/multiaddr-to-stupid-string/issues/new) or submit PRs.

## License

[MIT](LICENSE) © Alan Shaw
