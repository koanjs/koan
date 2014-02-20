# Koan.js: A Koa.js Application Boilerplate

![Define Koan](https://raw.github.com/bredikhin/koan/master/lib/boilerplates/application/public/images/define_koan.png)

[![Build Status](https://travis-ci.org/bredikhin/koan.png?branch=master)](https://travis-ci.org/bredikhin/koan)
[![Dependency Status](https://gemnasium.com/bredikhin/koan.png)](https://gemnasium.com/bredikhin/koan)
[![Code Climate](https://codeclimate.com/github/bredikhin/koan.png)](https://codeclimate.com/github/bredikhin/koan)
[![NPM version](https://badge.fury.io/js/koan.png)](http://badge.fury.io/js/koan)


## What is Koa.js?

[Koa.js](https://github.com/koajs/koa) is a modern Web framework designed by the team
behind [Express.js](https://github.com/visionmedia/express). While being lean and
minimalistic, it has all the functionality needed in order to create robust and
powerful Web-applications.

## So why do we need Koan.js?

An average Web-application often contains some common components (e.g. routing, public
folder, view rendering, etc.), and Koan.js provides you with a boilerplate having
many of these components already in place. Also, it proposes a way to organize
application features.

## Is it the right way to build Web-applications with Koa.js?

It's just one of many, many possible ways. The beauty of
[Koa.js](https://github.com/koajs/koa) (or
[Express.js](https://github.com/visionmedia/express)) is in its incredible flexibility
giving you freedom to organize your application however you feel is right. But if you
want just save your time and go with an existing solution, Koan.js definitely worth a
shot.

## Installation

`sudo npm install -g koan`

[![NPM](https://nodei.co/npm/koan.png)](https://nodei.co/npm/koan/)

## Usage

1. `koan new myapp` creates a subfolder `myapp` in the current directory with the new application boilerplate in it.
2. Use `npm install` to install dependencies.
3. Start your application with `koan start` (or just usual `node index.js`).
4. Run tests with `npm test`.
5. Autotest with `npm run autotest`.

## Configuration

* Add or disable middleware your new Koan.js application requires in `config/middleware.js`.
* Configure your routes in `config/routes.js`.
* Set other application options in `config/options.js`, they will be available during
runtime via `app.options`.


## Dependencies

* [Koa.js](https://github.com/koajs/koa) as the main application framework,
* [Co-views](https://github.com/visionmedia/co-views) for template rendering,
* [Koa-logger](https://github.com/koajs/logger) as logger middleware,
* [Koa-route](https://github.com/koajs/route) for routing,
* [Koa-static](https://github.com/koajs/static) to serve static assets,
* [Lodash](https://github.com/lodash/lodash) utilities,
* [Optimist](https://github.com/substack/node-optimist) for option parsing,
* [Fs-extra](https://github.com/jprichardson/node-fs-extra) for recursive file system operations.
* [Koa-response-time](https://github.com/koajs/response-time) for X-Response-Time header,
* [Koa-compress](https://github.com/koajs/compress) to enable response compression,
* [Koa-ratelimit](https://github.com/koajs/ratelimit) for rate limiting,
* [Koa-session](https://github.com/koajs/session) for session support,
* [Koa-compose](https://github.com/koajs/compose) to compose middleware,
* [Koa-etag](https://github.com/koajs/etag) for ETag support,
* [Redis](https://github.com/mranney/node_redis) for temporary storage,
* [Ejs](https://github.com/visionmedia/ejs) for templating.

## Contributions

* are welcome;
* should be tested;
* should follow [Koa.js](https://github.com/koajs/koa) coding style.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2014 [Ruslan Bredikhin](http://ruslanbredikhin.com/)
