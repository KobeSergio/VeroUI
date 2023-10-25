/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async headers() {
      return [
        {
          source: '/about',
          headers: [
            {
              key: 'x-custom-header',
              value: 'my custom header value',
            },
            {
              key: 'x-another-custom-header',
              value: 'my other custom header value',
            },
            {
                key: 'X-DNS-Prefetch-Control',
                value: 'on'
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload'
              },
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN'
              },
              {
                key: 'Permissions-Policy',
                value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin'
              }
          ],
        },
      ]
    },
  }
  module.exports = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'x-hello',
              value: 'there',
            },
          ],
        },
        {
          source: '/hello',
          headers: [
            {
              key: 'x-hello',
              value: 'world',
            },
          ],
        },
      ]
    },
  }
  module.exports = {
    async headers() {
      return [
        // if the header `x-add-header` is present,
        // the `x-another-header` header will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'header',
              key: 'x-add-header',
            },
          ],
          headers: [
            {
              key: 'x-another-header',
              value: 'hello',
            },
          ],
        },
        // if the header `x-no-header` is not present,
        // the `x-another-header` header will be applied
        {
          source: '/:path*',
          missing: [
            {
              type: 'header',
              key: 'x-no-header',
            },
          ],
          headers: [
            {
              key: 'x-another-header',
              value: 'hello',
            },
          ],
        },
        // if the source, query, and cookie are matched,
        // the `x-authorized` header will be applied
        {
          source: '/specific/:path*',
          has: [
            {
              type: 'query',
              key: 'page',
              // the page value will not be available in the
              // header key/values since value is provided and
              // doesn't use a named capture group e.g. (?<page>home)
              value: 'home',
            },
            {
              type: 'cookie',
              key: 'authorized',
              value: 'true',
            },
          ],
          headers: [
            {
              key: 'x-authorized',
              value: ':authorized',
            },
          ],
        },
        // if the header `x-authorized` is present and
        // contains a matching value, the `x-another-header` will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'header',
              key: 'x-authorized',
              value: '(?<authorized>yes|true)',
            },
          ],
          headers: [
            {
              key: 'x-another-header',
              value: ':authorized',
            },
          ],
        },
        // if the host is `example.com`,
        // this header will be applied
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'example.com',
            },
          ],
          headers: [
            {
              key: 'x-another-header',
              value: ':authorized',
            },
          ],
        },
      ]
    },
  }