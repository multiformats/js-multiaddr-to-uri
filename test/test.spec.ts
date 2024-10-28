/* eslint-env mocha */
import { expect } from 'aegir/chai'
import { multiaddrToUri as toUri } from '../src/index.js'

describe('multiaddr-to-uri', () => {
  it('should convert multiaddr to URI', () => {
    const data = [
      ['/ip4/127.0.0.1', '127.0.0.1'],
      ['/ip4/127.0.0.1/http', 'http://127.0.0.1'],
      ['/ip6/fc00::', 'fc00::'],
      ['/ip6/fc00::/http', 'http://[fc00::]'],
      ['/ip4/0.0.7.6/tcp/1234/http', 'http://0.0.7.6:1234'],
      ['/ip4/0.0.7.6/tcp/1234/https', 'https://0.0.7.6:1234'],
      ['/ip4/0.0.7.6/tcp/1234/tls/http', 'https://0.0.7.6:1234'],
      ['/ip4/1.2.3.4/tcp/443/tls/sni/ipfs.io/http', 'https://ipfs.io'],
      ['/ip4/1.2.3.4/tcp/1234/tls/sni/ipfs.io/http', 'https://ipfs.io:1234'],
      ['/ip4/1.2.3.4/tcp/443/tls/sni/ipfs.io/http/http-path/foo%2fbar', 'https://ipfs.io/foo/bar'],
      ['/ip4/1.2.3.4/tcp/1234/tls/sni/ipfs.io/http/http-path/foo%2fbar', 'https://ipfs.io:1234/foo/bar'],
      ['/ip4/0.0.7.6/udp/1234', 'udp://0.0.7.6:1234'],
      ['/ip6/::/udp/0', 'udp://[::]:0'],
      ['/dns/a.com/tcp/1234', 'http://a.com:1234'],
      ['/dns/a.com/tcp/1234/https', 'https://a.com:1234'],
      ['/dns/a.com/tcp/1234/tls/http', 'https://a.com:1234'],
      ['/dns/a.com/tcp/80', 'http://a.com'],
      ['/dns/a.com/tcp/443', 'https://a.com'],
      ['/dns/a.com', 'http://a.com'],
      ['/dnsaddr/ipfs.io', 'http://ipfs.io'],
      ['/dns4/ipfs.io', 'http://ipfs.io'],
      ['/dns4/libp2p.io', 'http://libp2p.io'],
      ['/dns6/protocol.ai', 'http://protocol.ai'],
      ['/dnsaddr/protocol.ai/tcp/80/http', 'http://protocol.ai'],
      ['/dnsaddr/protocol.ai/tcp/80/https', 'https://protocol.ai:80'],
      ['/dnsaddr/ipfs.io/ws', 'ws://ipfs.io'],
      ['/dnsaddr/ipfs.io/http', 'http://ipfs.io'],
      ['/dnsaddr/ipfs.io/https', 'https://ipfs.io'],
      ['/ip4/1.2.3.4/tcp/3456/ws', 'ws://1.2.3.4:3456'],
      ['/ip6/::/tcp/0/ws', 'ws://[::]:0'],
      ['/dnsaddr/ipfs.io/wss', 'wss://ipfs.io'],
      ['/dnsaddr/ipfs.io/tls/ws', 'wss://ipfs.io'],
      ['/ip4/1.2.3.4/tcp/443/tls/sni/ipfs.io/ws', 'wss://ipfs.io'],
      ['/ip4/1.2.3.4/tcp/1234/tls/sni/ipfs.io/ws', 'wss://ipfs.io:1234'],
      ['/ip4/1.2.3.4/tcp/3456/wss', 'wss://1.2.3.4:3456'],
      ['/ip6/::/tcp/0/wss', 'wss://[::]:0'],
      [
        '/ip4/127.0.0.1/tcp/20008/ws/ipfs/QmUjNmr8TgJCn1Ao7DvMy4cjoZU15b9bwSCBLE3vwXiwgj',
        'ws://127.0.0.1:20008'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'tcp://1.2.3.4:3456'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/http/http-path/foo%2fbar',
        'http://1.2.3.4:3456/foo/bar'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'tcp://1.2.3.4:3456'
      ]
    ]

    data.forEach(d => expect(toUri(d[0])).to.equal(d[1]))
  })

  it('should convert multiaddr to http(s):// URI when implicit { assumeHttp: true }', () => {
    const data = [
      ['/ip4/0.0.7.6/tcp/1234', 'http://0.0.7.6:1234'],
      ['/ip6/::/tcp/0', 'http://[::]:0'],
      ['/dns4/protocol.ai/tcp/80', 'http://protocol.ai'],
      ['/dns6/protocol.ai/tcp/80', 'http://protocol.ai'],
      ['/dns4/protocol.ai/tcp/8080', 'http://protocol.ai:8080'],
      ['/dns6/protocol.ai/tcp/8080', 'http://protocol.ai:8080'],
      ['/dns4/protocol.ai/tcp/443', 'https://protocol.ai'],
      ['/dns6/protocol.ai/tcp/443', 'https://protocol.ai'],
      ['/dnsaddr/protocol.ai/tcp/80', 'http://protocol.ai'],
      ['/dnsaddr/protocol.ai/tcp/443', 'https://protocol.ai'],
      ['/dnsaddr/protocol.ai/tcp/8080', 'http://protocol.ai:8080']
    ]
    data.forEach(d => expect(toUri(d[0])).to.equal(d[1]))
  })

  it('should convert multiaddr to tcp:// URI when explicit { assumeHttp: false }', () => {
    const data = [
      ['/ip4/0.0.7.6/tcp/1234', 'tcp://0.0.7.6:1234'],
      ['/ip6/::/tcp/0', 'tcp://[::]:0'],
      ['/dns4/protocol.ai/tcp/80', 'tcp://protocol.ai:80'],
      ['/dns6/protocol.ai/tcp/80', 'tcp://protocol.ai:80'],
      ['/dns4/protocol.ai/tcp/8080', 'tcp://protocol.ai:8080'],
      ['/dns6/protocol.ai/tcp/8080', 'tcp://protocol.ai:8080'],
      ['/dns4/protocol.ai/tcp/443', 'tcp://protocol.ai:443'],
      ['/dns6/protocol.ai/tcp/443', 'tcp://protocol.ai:443'],
      ['/dnsaddr/protocol.ai/tcp/80', 'tcp://protocol.ai:80'],
      ['/dnsaddr/protocol.ai/tcp/443', 'tcp://protocol.ai:443'],
      ['/dnsaddr/protocol.ai/tcp/8080', 'tcp://protocol.ai:8080']
    ]
    data.forEach(d => expect(toUri(d[0], { assumeHttp: false })).to.equal(d[1]))
  })

  it('should throw for unsupported protocol', () => {
    expect(() => toUri('/quic')).to.throw()
  })
})
