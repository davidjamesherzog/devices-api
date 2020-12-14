<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

A set of APIs for keeping track of Devices on your network.  The API is built upon [Nest.js](https://github.com/nestjs/nest)

## Installation

```bash
$ npm install
```

## Running the database

Postgres is used as the database.  A docker container is supplied to run Postgres and pgAdmin.

```bash
$ docker-compose up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [David Herzog](davidjherzog@gmail.com)

## License

  This is [MIT licensed](LICENSE).
