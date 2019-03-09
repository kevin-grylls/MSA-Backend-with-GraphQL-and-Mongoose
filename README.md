# Simple Backend Service GraphQL and Mongoose

## Service Description

- This is a simple backend service of MSA Web App.

- It's built with GraphQL and Mongoose based on Express.js.

## Scaffold

    - server
        - common
        - graphql
          - models
          - resolvers
          - types
        - index.js
    - package.json

## Usage

```js
## development
$ yarn dev

## production
$ yarn build && yarn prod

## dockerizing
$ docker build -t {Image Name} .
```

## Configuration

- Make sure mongo is installed and running on the same subnet so that service is operating.

- Or you can insert configurations as your enviroment such as development, staging and production.

- Mongo and Apollo are dependencies of this service.

```js
## Place where you insert configurations parameters
server/common/*
```

## Connection

- You could see message like this when service run and connect with your local environment.
  <img width="1913" alt="2019-03-06 2 58 03" src="https://user-images.githubusercontent.com/21056590/53863252-08fcc500-402d-11e9-8c06-d957703c0e20.png">

- `http://localhost:8083/graphql` for querie testing.
  <img width="1915" alt="2019-03-06 4 34 07" src="https://user-images.githubusercontent.com/21056590/53863498-b8d23280-402d-11e9-8cde-95b471de379b.png">

## LISENCE

MIT
