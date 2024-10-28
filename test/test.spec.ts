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
        '/ip4/1.2.3.4/tcp/3456/ws/p2p-webrtc-star/ipfs/QmWo6sLpfuhLnPNF1d2X6s9PXC5NvsRbC69uvHAJhZW9bk',
        'ws://1.2.3.4:3456/p2p-webrtc-star/p2p/QmWo6sLpfuhLnPNF1d2X6s9PXC5NvsRbC69uvHAJhZW9bk'
      ],
      [
        '/dnsaddr/ipfs.io/ws/p2p-webrtc-star/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'ws://ipfs.io/p2p-webrtc-star/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
      ],
      [
        '/dnsaddr/ipfs.io/wss/p2p-webrtc-star/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'wss://ipfs.io/p2p-webrtc-star/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
      ],
      [
        '/ip6/::/tcp/0/ws/p2p-webrtc-star/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo5',
        'ws://[::]:0/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo5'
      ],
      [
        '/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/ipfs/QmTysQQiTGMdfRsDQp516oZ9bR3FiSCDnicUnqny2q1d79',
        'wss://wrtc-star.discovery.libp2p.io/p2p-webrtc-star/p2p/QmTysQQiTGMdfRsDQp516oZ9bR3FiSCDnicUnqny2q1d79'
      ],
      ['/ip4/1.2.3.4/tcp/3456/http/p2p-webrtc-direct', 'http://1.2.3.4:3456/p2p-webrtc-direct'],
      ['/ip6/::/tcp/0/http/p2p-webrtc-direct', 'http://[::]:0/p2p-webrtc-direct'],
      ['/ip4/1.2.3.4/tcp/3456/ws/p2p-websocket-star', 'ws://1.2.3.4:3456/p2p-websocket-star'],
      ['/ip6/::/tcp/0/ws/p2p-websocket-star', 'ws://[::]:0/p2p-websocket-star'],
      [
        '/dnsaddr/localhost/ws/p2p-websocket-star/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'ws://localhost/p2p-websocket-star/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/ws/p2p-websocket-star/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'ws://1.2.3.4:3456/p2p-websocket-star/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
      ],
      [
        '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star/ipfs/QmP3vadpN9dqZ7j6KtmwP5Y4prg7XqdS7ixgZMWtXxBAbp',
        'wss://ws-star.discovery.libp2p.io/p2p-websocket-star/p2p/QmP3vadpN9dqZ7j6KtmwP5Y4prg7XqdS7ixgZMWtXxBAbp'
      ],
      [
        '/ip4/127.0.0.1/tcp/20008/ws/ipfs/QmUjNmr8TgJCn1Ao7DvMy4cjoZU15b9bwSCBLE3vwXiwgj',
        'ws://127.0.0.1:20008/p2p/QmUjNmr8TgJCn1Ao7DvMy4cjoZU15b9bwSCBLE3vwXiwgj'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/ws/p2p-webrtc-star/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'ws://1.2.3.4:3456/p2p-webrtc-star/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/ipfs/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'tcp://1.2.3.4:3456/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/http/http-path/foo%2fbar',
        'http://1.2.3.4:3456/foo/bar'
      ],
      [
        '/ip4/1.2.3.4/tcp/3456/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK',
        'tcp://1.2.3.4:3456/p2p/QmcNwyju7SWoizsAuf6kjaaRoxe762ovsT3hz6qt3xxcsK'
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
