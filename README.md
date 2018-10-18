# styleguide-api-node
NodeJS API for managing styleguide admin section. Can also be used as a API project boilerplate.

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

## Install Mongodb
---

## Running This Project
---

## API Examples
---