# Koan.js: A Koa.js Application Boilerplate

## What is Koa.js?

[Koa.js](https://github.com/koajs/koa) is a modern Web framework designed by the team
behind [Express.js](https://github.com/visionmedia/express). While being lean and
minimalistic, it has all the functionality needed in order to create robust and
powerful Web-applications.

## So why do we need Koan.js?

An average Web-application often contains some common components (e.g. routing, public
folder, view rendering, etc.), and Koan.js provides you with a boilerplate having
many of these components already in place. Also, it proposes a way to organize
application features in a unified way.

## Is it the right way to build Web-applications with Koa.js?

It's just one of many, many possible ways. The beauty of
[Koa.js](https://github.com/koajs/koa) (or
[Express.js](https://github.com/visionmedia/express)) is in its incredible flexibility
giving you freedom to organize your application however you feel is right. But if you
want just save your time and go with an existing solution, Koan.js definitely worth a
shot.

## Installation

`sudo npm install -g koan`

## Usage

1. `koan new myapp` creates a subfolder `myapp` in the current directory with the new application boilerplate in it.
2. Don't forget to run `npm install` to install dependencies.
3. Start your application with `koan start` (or just usual `node index.js`).
4. Run tests with `npm test`.
5. Autotest with `npm run autotest`.

## Dependencies

* [Koa.js](https://github.com/koajs/koa) as the main application framework,
* [co-views](https://github.com/visionmedia/co-views) for template rendering,
* [koa-logger](https://github.com/koajs/logger) as logger middleware,
* [koa-route](https://github.com/koajs/route) for routing,
* [koa-static](https://github.com/koajs/static) to serve static assets,
* [lodash](https://github.com/lodash/lodash) utilities,
* [optimist](https://github.com/substack/node-optimist) for option parsing,
* [fs-extra](https://github.com/jprichardson/node-fs-extra) for recursive file system operations.

## TODO

* Generate `README`, `package.json`, etc. for the new application dynamically
* New application generation: verify if the folder exists

## Contributions

* are welcome;
* should be tested;
* should follow [Koa.js](https://github.com/koajs/koa) coding style.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2014 [Ruslan Bredikhin](http://ruslanbredikhin.com/)
