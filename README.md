# Warren Challenge

[![VueJS Version](https://img.shields.io/badge/vuejs-3.2.37-green.svg)](https://vuejs.org)
![GitHub Repo Size](https://img.shields.io/github/repo-size/wolfhaltz/warren-challenge)

## Preview

<HOLD ON THE LINE BRO, I'M STILL CODING THIS (and a little tired too --')!>

## About & Features

This is an application for Warren tech challenge, created using `VueJS` that shows a list of transactions and its main data related of each screen.
The main rules of the challenge are:

- [ ] List of transactions grouped by date (???)
- [x] Filter by title
- [x] Filter by status
- [x] Modal containing transaction details

For more information about the challenge, check the official link here: <a href="https://github.com/warrenbrasil/desafio-warren-web">github/warrenbrasil</a>

## Tech decisions

* Decided to add colors at transaction status to improve user visualization
* Added alert at filter
* Added loading message
* Chose Montserrat font cause this is the second font at WarrenBR website
* Changed favicon and added SEO
* Applied vars for dark mode (and yeah yeah need to improve it)
* Did Services layer
* Some doubts that I had:
    * At the filter
        * Do u guys want to show everything if the 2 filters are applied or just one? 
        So, I did if the 2 options selected version, but I know how to do the other way too ahahhahaha
    * At you website:
        * While I was inspecioning your website, I noticed that u guys still use 3 or more props at CSS rather than write everything in just one line, as example: font-weight, font-family and font-size at 3 lines. There is an especific reason for this? ._.

## To-do

- [ ] Transform the progress bar in a component
- [ ] Improve dark mode (and perhaps a feature to switch both)
- [ ] See more details at transactions

## Get Started

Warning:
You must have the down below to run the project locally:

- <a href="https://nodejs.org/en/">node</a>
- <a href="https://git-scm.com">git</a>
- <a href="https://www.npmjs.com">npm</a>/<a href="https://yarnpkg.com">yarn</a>/package manager
- <a href="https://vuejs.org">VueJS</a>

### Locally project setup

To clone the project, navigate to its folder and to install required packages, run the following commands on the command prompt:

```sh
$ git clone https://github.com/wolfhaltz/warren-challenge.git
$ cd warren-challenge/
```

#### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit # or `npm run test:unit:ci` for headless testing
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

_Stay awesome Gotham!_