import * as log4js from "log4js";
import * as cluster from "express-cluster";
import * as fs from "fs";

// change current directory and bind the uncaughtException handler
process.chdir(__dirname);
process.on("uncaughtException", (err) => {
    log.error("uncaughtException", err);
});

// attempt to create the log folder
try {
    fs.mkdirSync("./log");
} catch (ex) {
    if (ex.code != "EEXIST") {
        console.error("Could not setup log directory, error was: ", ex);
        process.exit(1);
    }
}

// configure log4js
log4js.configure("../config/log4js.json");

// get logger so we can log messages
const log = log4js.getLogger("startup");

cluster((worker) => {
    log.info("starting worker #" + worker.id);
}, { count: 1 });
