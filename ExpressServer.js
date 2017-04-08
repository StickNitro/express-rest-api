const express = require("express");
const config = require("config");
const log4js = require("log4js");

const log = log4js.getLogger("app");

module.exports = class ExpressServer {
    constructor() {
        this._app = express();
        this._app.use(require("./middlewares"));
        this._app.use(require("./controllers"));
    }

    listen() {
        const scheme = config.get("server.scheme");
        switch (scheme) {
            case "http":
                this._app.listen(config.get("server.port"), config.get("server.hostname"), (err) => {
                    if (err) {
                        log.error(err);
                    }

                    log.info(`Listening on port: ${config.get("server.port")} on process: ${process.pid}`);
                });
                break;

            case "https":
                break;

            default:
                throw new Error(`unknown scheme in config: ${scheme}`);
        }
    }
};
