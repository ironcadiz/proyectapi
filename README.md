# Koa API Boilerplate (MC)

[![circleciB]][circleciL]
[![styleB]][styleL]


## Requirements
- Node >=8.5.0
- Yarn >=1.0.1
- Postgres

## Install

Setup your database
```sh
$ sudo su postgres
$ createdb databaseName
$ exit
```
Also you may change the name of database in `config/database.js`

Clone this repo
```sh
$ git clone git@github.com:gsulloa/koa-boilerplate.git project
$ cd project
```

Setup your env vars
```sh
$ export DB_PASSWORD=securepassword
```
Alternatively with direnv
```sh
$ cp .envrc.example .envrc
$ nano .envrc
# modify the env var with your data
```

Start your server and code!
```sh
$ yarn dev
```

## Using default Auth

Implemented authentication use JWT.
To get it
```sh
$ git pull origin auth
```

<!-- Badges -->

[circleciL]:https://circleci.com/gh/gsulloa/koa-boilerplate
[circleciB]:https://circleci.com/gh/gsulloa/koa-boilerplate.svg?style=svg

[styleL]:https://github.com/prettier/prettier
[styleB]:https://img.shields.io/badge/code%20style-prettier-brightgreen.svg?style=flat