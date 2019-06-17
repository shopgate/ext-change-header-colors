# Shopgate Connect - Change Header Colors Extension

[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE)

This extension changes the background and text color of the header.

## Configuration

Set the following values in your Shopgate Connect Admin:
* backgroundColor - (text) The background color of the header.
* textColor - (text) The color of header icons and text.
* affectedPages - (Array) Whitelist where the header should change eg `["/", "/category/:categoryId", "/item/:productId"]`. Default `[] will change it on every page"

### Common page patterns

| page  | pattern  |
|---|---|
| Startpage  | `/`  |
| PDP  | `/item/:productId`  |
| Root category  | `/category`  |
| Category  | `/category/:categoryId`  |
| Cart  | `/cart`  |
| CMS pages  | `/page/:pageId`  |
| Search  | `/search`  |
| Fitler  | `/search/filter`  |
| More  | `/more`  |
| Browse  | `/browse`  |


## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for more information.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
