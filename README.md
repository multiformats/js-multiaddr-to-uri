# @multiformats/multiaddr-to-uri <!-- omit in toc -->

[![multiformats.io](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://multiformats.io)
[![codecov](https://img.shields.io/codecov/c/github/multiformats/js-multiaddr-to-uri.svg?style=flat-square)](https://codecov.io/gh/multiformats/js-multiaddr-to-uri)
[![CI](https://img.shields.io/github/workflow/status/multiformats/js-multiaddr-to-uri/test%20&%20maybe%20release/master?style=flat-square)](https://github.com/multiformats/js-multiaddr-to-uri/actions/workflows/js-test-and-release.yml)

> Convert a Multiaddr to a URI /dnsaddr/ipfs.io/http -> <http://ipfs.io>

## Table of contents <!-- omit in toc -->

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Contribute](#contribute-1)

## Install

```console
$ npm i @multiformats/multiaddr-to-uri
```

## Usage

```js
import { multiaddrToUri } from '@multiformats/multiaddr-to-uri'

console.log(multiaddrToUri('/dnsaddr/protocol.ai/https'))
// -> https://protocol.ai

console.log(multiaddrToUri('/ip4/127.0.0.1/tcp/8080'))
// -> http://127.0.0.1:8080

console.log(multiaddrToUri('/ip4/127.0.0.1/tcp/8080', { assumeHttp: false }))
// -> tcp://127.0.0.1:8080
```

Note:

- When `/tcp` is the last (terminating) protocol HTTP is assumed by default (implicit `assumeHttp: true`)
  - this means produced URIs will start with `http://` instead of `tcp://`
  - passing `{ assumeHttp: false }` disables this behavior
- Might be lossy - e.g. a DNSv6 multiaddr
- Can throw if the passed multiaddr:
  - is not a valid multiaddr
  - is not supported as a URI e.g. circuit

## Contribute

Feel free to dive in! [Open an issue](https://github.com/multiformats/js-multiaddr-to-uri/issues/new) or submit PRs.

## License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

## Contribute

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
