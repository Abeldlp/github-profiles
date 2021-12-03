# PressPage Assessment
## _Github Profile Peaker_
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
### Technology used
Below are listed the libraries and frameworks that were used to complete this project.
- [Vue.js](https://vuejs.org/) - Javascript frontend framework
- [Typescript](https://www.typescriptlang.org/) - Typed syntax for javascript
- [Vuex](https://vuex.vuejs.org/) - State management library
- [Mocha](https://mochajs.org/) - Javascript test framework
- [Chai](https://www.chaijs.com/) - BDD / TDD assertion library
- [Cypress](https://www.cypress.io/) - End to end Javascript test framework
- [Vue-Feather-Icons](https://vue-feather-icons.egoist.sh/) - Feather Icons comepenents
- [Gsap](https://greensock.com/gsap/) - Animation library
- [Tailwind css](https://tailwindcss.com/) - Css framework
- [Axios](https://axios-http.com/docs/intro) - Promised-based http client


> Project built for Pagepress as assessment for developer position

### Steps to run the code locally
Note that this project requires [Nodejs](https://nodejs.org/en/) to run.
- Clone the repository
```sh
git clone https://github.com/Abeldlp/github-profiles.git
```
- Install packages needed for the project
```sh
npm install
```
- Serve the project locally
```sh
npm run serve
```
- Run unit test
```sh
npm run test:unit
```
- Run e2e test
```sh
npm run test:e2e
```
### Steps to build the code
The build steps to build this project are automated via [Vercel](https://vercel.com/).
The pipeline for this project will run when the `main` branch is pushed or when a pull request is merged into `main`
Changes pushed to main branch are directly deployed to production.
Check [live site](https://github-profiles-zeta.vercel.app/)
Pipeline steps.
- Build the project with npm run build
- Make sure that dist is the output directory
- Making a workspace on root folder
- Make sure that node ^14.x is installed
- Install required packages
- Serve the project

