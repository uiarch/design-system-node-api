# Design System NodeJS API
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

NodeJS API for managing design system. Can also be used as a API project boilerplate.

## Dependencies
---

* [Bluebird](http://bluebirdjs.com/)
  * __Description:__ Promise library used with Mongoose (ODM).
  * __Why is it used:__ Replaces Mongoose's own promise library (faster, better tested, and has more utility functions available).
  * __Example:__ See examples on [Bluebirds site](http://bluebirdjs.com/docs/why-promises.html)

* [BodyParser](https://www.npmjs.com/package/body-parser)
  * __Description:__ NodeJS body parsing middleware.
  * __Why is it used:__ Used for parsing Json data in our API calls and parsing urlencoded bodies.
  * __Example:__ See examples on [body-parser](https://www.npmjs.com/package/body-parser)

* [Compression](https://www.npmjs.com/package/compression)
  * __Description:__ Gzip compression middleware.
  * __Why is it used:__ Can greatly decrease the size of the response body and increase the speed of our web app.
  * __Example:__ See examples on [compression](https://www.npmjs.com/package/compression)

* [Cors](https://www.npmjs.com/package/cors)
  * __Description:__ NodeJS package that enables `CORS` for ExpressJS.
  * __Why is it used:__ Allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.
  * __Example:__ Header returns `Access-Control-Allow-Origin: *` when enabled. See examples on [cors](https://www.npmjs.com/package/cors)

* [DotEnv](https://www.npmjs.com/package/dotenv)
  * __Description:__ Loads environment variables from .env file.
  * __Why is it used:__ To store configs in a single location that the app can read from and so this info is not stored in version control.
  * __Example:__ Checkout the `.env.example` to see the configs.

* [Express](https://expressjs.com)
  * __Description:__ NodeJS web application framework.
  * __Why is it used:__ Provides a nice library of web application features that we can use to build our app without obscuring NodeJS.
  * __Example:__ See examples on [expressJs](https://expressjs.com/en/starter/installing.html)

* [HTTP Status](https://www.npmjs.com/package/http-status)
  * __Description:__ Predfined HTTP status codes for NodeJS.
  * __Why is it used:__ This is used in our API controllers for returning our http status on success or error.
  * __Example:__ See examples on [http-status](https://www.npmjs.com/package/http-status)

* [Mongoose](https://mongoosejs.com/)
  * __Description:__ Mongoose (ODM) Object Data Modeling library for NodeJS and MongoDB.
  * __Why is it used:__ Handles the relationships between data and handles schema validation and more.
  * __Example:__ See examples on [Mongoose](https://mongoosejs.com/)

## Dev Dependencies
---

* [All Contributors CLI](https://www.npmjs.com/package/all-contributors-cli)
  * __Description:__ Used to implement the `All Contributors Spec`.
  * __Why is it used:__ Helps to automate the `All Contributors Spec` creates our `.all-contributorsrc` file and fill in contributor information. Also writes contributor info to `README.md`.
  * __Example:__ See examples on [all-contributors-cli](https://www.npmjs.com/package/all-contributors-cli)

* [Babel Core](https://www.npmjs.com/package/@babel/core)
  * __Description:__ Babel compiler core package.
  * __Why is it used:__ Used as part of webpack in our build srcripts to compile `ECMAScript 2015+` into browser supported versions of JavaScript.
  * __Example:__ See examples on [@babel/core](https://www.npmjs.com/package/@babel/core)

* [Babel Loader](https://www.npmjs.com/package/babel-loader)
  * __Description:__ Allows transpiling JavaScript with `Babel` and `WebPack`.
  * __Why is it used:__ `WebPack` enables the use of loaders to preprocess files. Allows us to bundle our static resources.
  * __Example:__ See examples on [babel-loader](https://www.npmjs.com/package/babel-loader)

* [Babel Preset Env ](https://www.npmjs.com/package/@babel/preset-env)
  * __Description:__ Allows us to use the latest ECMA Script syntax without constantly chaning the supported versions.
  * __Why is it used:__  Checks target environments against their mappings to compile a list of plugins and passes it to `Babel`.
  * __Example:__ See examples on [@babel/preset-env](https://babeljs.io/docs/en/next/babel-preset-env.html)

* [EsLint](https://www.npmjs.com/package/eslint)
  * __Description:__ JavaScript syntax linter.
  * __Why is it used:__ Lints our JavaScript syntax.
  * __Example:__ See examples on [eslint](https://www.npmjs.com/package/eslint)

* [EsLint Config Google](https://www.npmjs.com/package/eslint-config-google)
  * __Description:__ `Google's JavaScript Styleguide`.
  * __Why is it used:__ Our eslint configs extends these to define our `JavaScript styleguide` when linting.
  * __Example:__ See examples on [eslint-config-google](https://www.npmjs.com/package/eslint-config-google)
  * __Docs:__ [Google JavaScript Styleguide Docs](https://google.github.io/styleguide/jsguide.html)

* [NPS Scripts](https://www.npmjs.com/package/nps)
  * __Description:__ Allows us to use npm scripts in a much cleaner way without bloating the package.json file.
  * __Why is it used:__ Needed to seperate all of our project build scripts without adding another dependency like gulp. Allows us to use npm scripts and not in the package file so we can organize it, and also allows us to comment each script.
  * __Example:__ Checkout the `package-scripts.js` to see all the tasks this is handling for this project.

* [NPS Scripts Utils](https://www.npmjs.com/package/nps-utils)
  * __Description:__ Has several utility functions to help when using nps scripts.
  * __Why is it used:__ Wanted to use this so we could use it's utility methods within our nps tasks file.
  * __Example:__ Checkout the [API Docs](https://doc.esdoc.org/github.com/kentcdodds/nps-utils/) for list of all the utility methods.

* [Path](https://www.npmjs.com/package/path)
  * __Description:__ Utility for working with file and directory paths in NodeJS.
  * __Why is it used:__ `Webpack` uses this for defining project paths.
  * __Example:__ See examples on [path](https://nodejs.org/docs/latest/api/path.html)

* [Regenerator Runtime]()
  * __Description:__ From [GitHub](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) `Standalone runtime for Regenerator-compiled generator and async functions`
  * __Why is it used:__ Adds support in WebPack for async functions.
  * __Example:__ See examples on [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)

* [Webpack](https://www.npmjs.com/package/webpack)
  * __Description:__ Module bundler for bundling JavaScript files for usage in a browser.
  * __Why is it used:__ Bundles our `API` files into `www` dir.
  * __Example:__ See examples on [webpack](https://webpack.js.org/concepts/)

* [Webpack CLI](https://www.npmjs.com/package/webpack-cli)
  * __Description:__ CLI tool used for setting up Webpack projects.
  * __Why is it used:__ Runds our webpack commands from build scripts.
  * __Example:__ See our `package-scripts.js` where commands are being executed. Also see [webpack-cli](https://webpack.js.org/guides/getting-started/)

* [Webpack Node Externals]()
  * __Description:__ Used to exclude modules from bundling.
  * __Why is it used:__ Ignore all modules in `node_modules` directory.
  * __Example:__ See examples on [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals)

## Installation
---

* Clone this repository `git clone https://github.com/uiarch/design-system-node-api.git`.
* Cd into app `cd design-system-node-api`.
* Run `npm install`.
* Follow [MongoDB Instructions below](#install-mongodb).
* Run `cp .example.env .env` and fill in values.
* Run `npm run build:dev` and then `npm run watch:dev` files will be compiled and ran from `www` dir.
* Go to `localhost:<.env specified port>`.

## Install MongoDB
---

* In your terminal type `brew update`.
* After homebrew is finished updating run `brew install mongodb`.
* Start the MongoDB server `mongod`.
* In another terminal window run mongo shell by typing `mongo` which is an application to access data in MongoDB.
* __@todo add docs for creating auth user in MongoDB__

* Connecting to MongoDB
  * Copy `.env.example` to `.env`
  * `MONGO_URL=localhost`
  * `MONGO_DB_NAME=dbName`
  * `MONGO_USER=username`
  * `MONGO_PASSWORD=password`
  * `MONGO_PORT=27017`

## Running This Project
---

* Uses [nps](https://www.npmjs.com/package/nps) (Node Package Scripts) dependency for handling our tasks.
* Build for production, cleans and compiles code to `www` dir then compresses JS.
  * `npm run build:prod` - `"nps build"`
* Build and run server for development, compiles code to `www` dir does not compress JS.
  * `npm run build:dev` - `"nps dev.build"`
* Watch and compile code and run node server.
  * `npm run watch:dev` - `nps dev`
* Run `eslint` which extends `eslint-config-google`.
  * `npm run lint` - `nps lint`
* Run `eslint` fix.
  * `lint:fix` - `nps lint.fix`
* Follows the all-contributors specification.
  * Run `contributors:add` which is used to add yourself to the contributors list. See [all-contributors](https://www.npmjs.com/package/all-contributors-cli) for more details and usage.
    * `npm run contributors:add -- <github username> <contrib type>`
    * `npm run contributors:generate` generates contributors in readme.md.

## API Examples
---

### Icons
* __`cURL` retrieve icon by name example:__
  ```
    curl -X GET \
    http://localhost:8081/api/icons/user-icon \
    -H 'cache-control: no-cache'
  ```
* __`cURL` retrieve list of icons Example:__
  ```
    curl -X GET \
    http://localhost:8081/api/icons \
    -H 'cache-control: no-cache'
  ```
* __`cURL` create icon example:__
  ```
    curl -X POST \
      http://localhost:8081/api/icons \
      -H 'Content-Type: application/json' \
      -H 'cache-control: no-cache' \
      -d '{
      "name": "user-icon",
      "tags": ["solid", "wire"],
      "versions": [1.2, 1.5]
    }'
  ```

## Contributors
---

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5857345?v=4" width="100px;"/><br /><sub><b>Anthony Allen</b></sub>](http://theuiarch.com)<br />[💻](https://github.com/uiarch/design-system-node-api/commits?author=uiarch "Code") [📖](https://github.com/uiarch/design-system-node-api/commits?author=uiarch "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->