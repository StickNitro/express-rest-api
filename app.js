const log4js = require("log4js");
const ExpressServer = require("./ExpressServer");

process.chdir(__dirname);
process.on("uncaughtException", (err) => {
    if (err) {
        log.error("unhandled error encountered: ", err);
    }
});

// configure logging and get logger for startup
log4js.configure("./config/log4js.json");
const log = log4js.getLogger("startup");

const app = new ExpressServer()
    .listen();
