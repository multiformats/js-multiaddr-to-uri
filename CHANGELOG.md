## [11.0.1](https://github.com/multiformats/js-multiaddr-to-uri/compare/v11.0.0...v11.0.1) (2025-06-27)

### Bug Fixes

* refactor to not use deprecated multiaddr functions ([#168](https://github.com/multiformats/js-multiaddr-to-uri/issues/168)) ([a0f1751](https://github.com/multiformats/js-multiaddr-to-uri/commit/a0f1751e6f24fb1997814816138347feec16432d))

## [11.0.0](https://github.com/multiformats/js-multiaddr-to-uri/compare/v10.1.2...v11.0.0) (2024-11-08)

### ⚠ BREAKING CHANGES

* p2p-webrtc-direct/p2p-websocket-star support has been removed

### Bug Fixes

* remove deprecated transports and do not append peer ids ([#155](https://github.com/multiformats/js-multiaddr-to-uri/issues/155)) ([161329c](https://github.com/multiformats/js-multiaddr-to-uri/commit/161329ca991cf967a60762b41535e16d0282a70b))

### Dependencies

* **dev:** bump aegir from 44.1.4 to 45.0.1 ([#156](https://github.com/multiformats/js-multiaddr-to-uri/issues/156)) ([b82d7c0](https://github.com/multiformats/js-multiaddr-to-uri/commit/b82d7c0133abf5fe63bfdba1a6cc37aab61fc3ca))

## [10.1.2](https://github.com/multiformats/js-multiaddr-to-uri/compare/v10.1.1...v10.1.2) (2024-10-28)

### Bug Fixes

* handle ports in multiaddrs with SNI tuples ([#154](https://github.com/multiformats/js-multiaddr-to-uri/issues/154)) ([9fd5bdb](https://github.com/multiformats/js-multiaddr-to-uri/commit/9fd5bdbd74f63e61109fe7183bf75f8c69aa357a))

## [10.1.1](https://github.com/multiformats/js-multiaddr-to-uri/compare/v10.1.0...v10.1.1) (2024-10-26)

### Dependencies

* **dev:** bump aegir from 43.0.3 to 44.1.4 ([#153](https://github.com/multiformats/js-multiaddr-to-uri/issues/153)) ([d6cc0a0](https://github.com/multiformats/js-multiaddr-to-uri/commit/d6cc0a0ac4d172b4fcdba842b4cf28baeab60785))

## [10.1.0](https://github.com/multiformats/js-multiaddr-to-uri/compare/v10.0.1...v10.1.0) (2024-06-06)


### Features

* add support for http-path ([#148](https://github.com/multiformats/js-multiaddr-to-uri/issues/148)) ([65aa537](https://github.com/multiformats/js-multiaddr-to-uri/commit/65aa5376e45cdec80e4bcc8008cb9c63abd1db25))


### Dependencies

* **dev:** bump aegir from 42.2.11 to 43.0.1 ([#147](https://github.com/multiformats/js-multiaddr-to-uri/issues/147)) ([266001f](https://github.com/multiformats/js-multiaddr-to-uri/commit/266001f8f6e56a542eb7225f1fb95b48199aeebf))

## [10.0.1](https://github.com/multiformats/js-multiaddr-to-uri/compare/v10.0.0...v10.0.1) (2024-02-05)


### Trivial Changes

* rename master to main ([81d94e5](https://github.com/multiformats/js-multiaddr-to-uri/commit/81d94e52582ecaeeab5513ffa68ad305f9e73b47))


### Documentation

* update readme ([3f42a05](https://github.com/multiformats/js-multiaddr-to-uri/commit/3f42a05e56fa7062dbee777bec00fb5ee136b2e5))

## [10.0.0](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.8...v10.0.0) (2024-02-05)


### ⚠ BREAKING CHANGES

* dns addresses previously returned domain names, now they return URLs

### Bug Fixes

* always return a URI for DNS addresses ([#130](https://github.com/multiformats/js-multiaddr-to-uri/issues/130)) ([dae8350](https://github.com/multiformats/js-multiaddr-to-uri/commit/dae835053d4e9e0f4ce4dab57e98b4d996999653)), closes [#8](https://github.com/multiformats/js-multiaddr-to-uri/issues/8)

## [9.0.8](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.7...v9.0.8) (2024-02-05)


### Trivial Changes

* add or force update .github/workflows/js-test-and-release.yml ([#137](https://github.com/multiformats/js-multiaddr-to-uri/issues/137)) ([1b886c6](https://github.com/multiformats/js-multiaddr-to-uri/commit/1b886c6d05105fbb8311a5d8fd0c2fc54bc8d911))
* delete templates [skip ci] ([#136](https://github.com/multiformats/js-multiaddr-to-uri/issues/136)) ([92fae51](https://github.com/multiformats/js-multiaddr-to-uri/commit/92fae51fe27f86a10ef5a0e013366f97715b30d5))


### Dependencies

* **dev:** bump aegir from 39.0.13 to 41.0.5 ([#145](https://github.com/multiformats/js-multiaddr-to-uri/issues/145)) ([a90dca4](https://github.com/multiformats/js-multiaddr-to-uri/commit/a90dca4b412ef38eca54bf58bf727eeb357a83ed))

## [9.0.7](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.6...v9.0.7) (2023-05-19)


### Bug Fixes

* support /dns addresses ([#129](https://github.com/multiformats/js-multiaddr-to-uri/issues/129)) ([c852bfc](https://github.com/multiformats/js-multiaddr-to-uri/commit/c852bfca681112246483a8c98d46ad1d1384ba1c)), closes [#9](https://github.com/multiformats/js-multiaddr-to-uri/issues/9)

## [9.0.6](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.5...v9.0.6) (2023-05-19)


### Dependencies

* **dev:** bump aegir from 38.1.8 to 39.0.7 ([#128](https://github.com/multiformats/js-multiaddr-to-uri/issues/128)) ([8c84ed3](https://github.com/multiformats/js-multiaddr-to-uri/commit/8c84ed3d89f1116eccc6f6044f0ee6ea75c6ae00))

## [9.0.5](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.4...v9.0.5) (2023-05-19)


### Bug Fixes

* Rewrite to interpret multiaddr from right to left ([#120](https://github.com/multiformats/js-multiaddr-to-uri/issues/120)) ([681d4e3](https://github.com/multiformats/js-multiaddr-to-uri/commit/681d4e3f07b7e721e3a2eccc9905e76110f4dfbb))

## [9.0.4](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.3...v9.0.4) (2023-03-20)


### Dependencies

* bump @multiformats/multiaddr from 11.6.1 to 12.0.0 ([#123](https://github.com/multiformats/js-multiaddr-to-uri/issues/123)) ([dcba0c8](https://github.com/multiformats/js-multiaddr-to-uri/commit/dcba0c8f4bc1079fbb138f79d88b891d3976de75))

## [9.0.3](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.2...v9.0.3) (2023-03-17)


### Dependencies

* **dev:** bump aegir from 37.12.1 to 38.1.7 ([#119](https://github.com/multiformats/js-multiaddr-to-uri/issues/119)) ([f3ee76d](https://github.com/multiformats/js-multiaddr-to-uri/commit/f3ee76d2602bc84af1ce0ec179ff67ceb03376e8))

## [9.0.2](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.1...v9.0.2) (2022-09-21)


### Trivial Changes

* update project config ([#102](https://github.com/multiformats/js-multiaddr-to-uri/issues/102)) ([ccd291c](https://github.com/multiformats/js-multiaddr-to-uri/commit/ccd291ce522a0ddbacd2ff64dc8ffcdab2156358))


### Dependencies

* update @multiformats/multiaddr to 11.0.0 ([#104](https://github.com/multiformats/js-multiaddr-to-uri/issues/104)) ([d4a1d16](https://github.com/multiformats/js-multiaddr-to-uri/commit/d4a1d163ab92704c216a2ae5b764c2e6e303bcea))

### [9.0.1](https://github.com/multiformats/js-multiaddr-to-uri/compare/v9.0.0...v9.0.1) (2022-01-08)


### Trivial Changes

* add semantic release config ([#78](https://github.com/multiformats/js-multiaddr-to-uri/issues/78)) ([e00ae24](https://github.com/multiformats/js-multiaddr-to-uri/commit/e00ae2450b5ead66c5331e7be35144537533a0c7))
* update readme ([#77](https://github.com/multiformats/js-multiaddr-to-uri/issues/77)) ([6a23bb1](https://github.com/multiformats/js-multiaddr-to-uri/commit/6a23bb11df228abb08188c443c7677ee5c679953))
