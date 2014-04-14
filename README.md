# Koan.js: A Koa.js Application Boilerplate

![Define Koan](https://raw.github.com/koanjs/koan/master/lib/boilerplates/application/public/images/define_koan.png)

[![Build Status](https://travis-ci.org/koanjs/koan.png?branch=master)](https://travis-ci.org/koanjs/koan)
[![Dependency Status](https://gemnasium.com/bredikhin/koan.png)](https://gemnasium.com/bredikhin/koan)
[![Code Climate](https://codeclimate.com/github/bredikhin/koan.png)](https://codeclimate.com/github/bredikhin/koan)
[![Coverage Status](https://coveralls.io/repos/bredikhin/koan/badge.png)](https://coveralls.io/r/bredikhin/koan)
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

## Configuration

* Add or disable middleware your new Koan.js application requires in `config/middleware.js`.
* Configure your routes in `config/routes.js`.
* Configure view scripts templating in `config/views.js`.
* Set other application options in `config/options.js`, they will be available during
runtime via `app.options`.

## Scaffolding

* Run `koan controller <controllerName>` while inside the project root in order to generate a new controller.
* Run `koan model <modelName>` while inside the project root in order to generate a new model.
* Run `koan resource <resourceName>` while inside the project root in order to generate both controller and model (no automated RESTful routing generation is implemented at this point, so you will have to describe the routes manually).

More scaffolds to come.

## Dependencies

* [Koa.js](https://github.com/koajs/koa) as the main application framework,
* [Koan-views](https://github.com/bredikhin/koan-views) for template rendering with layouts,
* [Koan-errors](https://github.com/bredikhin/koan-errors) for error handling,
* [Koa-route](https://github.com/koajs/route) for routing,
* [Lodash](https://github.com/lodash/lodash) utilities,
* [Commander](https://github.com/visionmedia/commander.js) for CLI,
* [Fs-extra](https://github.com/jprichardson/node-fs-extra) for recursive file system operations,
* [Koa-compose](https://github.com/koajs/compose) to compose middleware.

## Contributions

* are welcome;
* should be tested;
* should follow [Koa.js](https://github.com/koajs/koa) coding style.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013-2014 [Ruslan Bredikhin](http://ruslanbredikhin.com/)
