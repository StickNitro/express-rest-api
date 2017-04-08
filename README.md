# express-rest-api

## Introduction

express-rest-api is a boiler plate implementation of Express.JS.

It lets you quickly get a RESTful API up and running and supports dynamically injected middleware and controllers.

Configurations are stored on configuration files within the application and can be overridden and extended using environment variables.

## Quick Start

##### Install in the app directory.

``` bash
$ npm install
```

Extend the configuration as appropriate for your environment, to add SSL support change the configuration as follows:

``` bash
$ vi config/production.json
```

``` json
{
    "server": {
        "scheme": "https",
        "port": 443,
        "certificate": {
            "pfx": "path/to/certificate.pfx",
            "passphrase": "certificate_password"
        }
    }
}
```

##### Start your app server

``` bash
$ export NODE_ENV=production
$ node app.js
```

Or using a script in ```package.json```:

``` json
{
    "scripts": {
        "start:prd": "NODE_ENV=production nodemon ."
    }
}
```

Then run this from the command line as follows:

``` bash
$ npm run start:prd
```

Running in this configuration the scheme and port will create a https server using the certificate in the config file

## Middleware

You can include additional custom middleware' by adding your middleware javascript files under the ```middlewares/api``` folder, during server startup the app will auto detect and install any files under this location.

Note: Middleware files **MUST** contain the word ```Middleware``` in its name, i.e. ```api/token/JwtTokenMiddleware.js```

## Controllers (Routes)

You can define your routes using controllers that must be located under ```controllers/api```, during server startup the app will automatically install any controller files found under this location.

Note: Controller files **MUST** contain the word ```Controller``` in its name, i.e. ```api/hello/worldController.js```

## Contributing Guide

See [CONTRIBUTING.md](https://raw.githubusercontent.com/StickNitro/express-rest-api/master/CONTRIBUTING.md)

## License

May be freely distributed under the [Apache 2.0 license](https://raw.githubusercontent.com/StickNitro/express-rest-api/master/LICENSE).

Copyright (c) 2017 Neil Stevens [and other contributers](https://github.com/StickNitro/express-rest-api/graphs/contributors)
