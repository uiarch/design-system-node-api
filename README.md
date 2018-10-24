# Design System NodeJS API
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

NodeJS API for managing design system. Can also be used as a API project boilerplate.

## Dependencies
---

* Dependency Name
  * Description:
  * Why is it used:

## Dev Dependencies
---

* NPS Scripts - [npm-package-scripts](https://www.npmjs.com/package/nps)
  * __Description:__ Allows us to use npm scripts in a much cleaner way without bloating the package.json file.
  * __Why is it used:__ Needed to seperate all of our project build scripts without adding another dependency like gulp. Allows us to use npm scripts and not in the package file so we can organize it, and also allows us to comment each script.
  * __Example:__ Checkout the `package-scripts.js` to see all the tasks this is handling for this project.

* NPS Scripts Utils - [nps-utils](https://www.npmjs.com/package/nps-utils)
  * __Description:__ Has several utility functions to help when using nps scripts.
  * __Why is it used:__ Wanted to use this so we could use it's utility methods within our nps tasks file.
  * __Example:__ Checkout the [API Docs](https://doc.esdoc.org/github.com/kentcdodds/nps-utils/) for list of all the utility methods.

* Dotenv - [dotenv](https://www.npmjs.com/package/dotenv)
  * __Description:__ Loads environment variables from .env file.
  * __Why is it used:__ To store configs in a single location that the app can read from and so this info is not stored in version control.
  * __Example:__ Checkout the `.env.example` to see the configs

## Installation
---

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

## Contributors
---

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5857345?v=4" width="100px;"/><br /><sub><b>Anthony Allen</b></sub>](http://theuiarch.com)<br />[💻](https://github.com/uiarch/design-system-node-api/commits?author=uiarch "Code") [📖](https://github.com/uiarch/design-system-node-api/commits?author=uiarch "Documentation") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->