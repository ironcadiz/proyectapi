# Proyectapp API

[![styleB]][styleL]

This is the API for [proyectapp](https://github.com/gsulloa/proyectapp), 
 developed from [Create Koa API](https://github.com/gsulloa/create-koa-api). 


## Requirements
- Node >=8.5.0
- Yarn >=1.0.1
- Postgres

## Setup

Assuming you have already created the postgres db and cloned the repo.

Create a .envrc file in the repo root to fill the env variables:

```
export DB_PASSWORD=somepassword
export DB_USERNAME=somedbuser
export DB_DIALECT=postgres
export DB_NAME=somedb
export DB_HOST=someip
```
then do

```bash
source .envrc
```
Or use direnv.

Then install the app:

```bash
$ yarn install
```
Create db and run migrations:

```bash
yarn run db:create
yarn run db:migrate
yarn run db:seed
```

Start your server and code!
```bash
yarn dev
```


<!-- Badges -->

[styleL]:https://github.com/prettier/prettier
[styleB]:https://img.shields.io/badge/code%20style-prettier-brightgreen.svg?style=flat