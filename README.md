# nuxt-apollo-server

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Drop-in apollo server for your nuxt projects.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-apollo-server` dependency to your project

```bash
yarn add nuxt-apollo-server # or npm install nuxt-apollo-server
```

2. Add `nuxt-apollo-server` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-apollo-server',

    // With options
    ['nuxt-apollo-server', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) eyeruleall <eyeruleall@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-apollo-server/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-apollo-server

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-apollo-server.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-apollo-server

[github-actions-ci-src]: https://github.com/eyeruleall/nuxt-apollo-server/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/eyeruleall/nuxt-apollo-server/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/eyeruleall/nuxt-apollo-server.svg
[codecov-href]: https://codecov.io/gh/eyeruleall/nuxt-apollo-server

[license-src]: https://img.shields.io/npm/l/nuxt-apollo-server.svg
[license-href]: https://npmjs.com/package/nuxt-apollo-server
