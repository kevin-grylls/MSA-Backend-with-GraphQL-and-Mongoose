# Simple MSA Backend Example with GraphQL and Mongoose

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

  <img style="-webkit-user-select: none;cursor: zoom-in;" src="https://user-images.githubusercontent.com/21056590/54073315-fa323e80-42c8-11e9-82c6-0a1da6813c26.png" width="788" height="155">

- Check `http://localhost:8083/graphql` for queries

  <img width="1915" alt="2019-03-06 4 34 07" src="https://user-images.githubusercontent.com/21056590/53863498-b8d23280-402d-11e9-8cde-95b471de379b.png">

## LISENCE

MIT
