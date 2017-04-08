const log4js = require("log4js");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const log = log4js.getLogger("middlewares");

const router = express.Router();

// set CORS for all routes
log.info("register cors");
router.all("*", cors());

log.info("register body parser");
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

/* ##### DO NOT CHANGE ANYTHING BELOW THIS LINE ##### */
/* This is the middleware loader, it will dynamically load middleware instances from the nested folder structure below this folder, the only caveat is that the middleware file must contain the word Middleware in its name */const fs = require("fs");const path = require("path");function loadMiddlewares(rootPath, parent) {parent = parent || "";const fi = fs.lstatSync(rootPath);if (fi.isDirectory()) {const files = fs.readdirSync(rootPath);const apiPath = rootPath.substring(rootPath.lastIndexOf("\\")).replace("\\", "/");parent += apiPath;for (var x = 0; x < files.length; x++) {const file = path.join(rootPath, files[x]);loadMiddlewares(file, parent);}} else {loadMiddleware(rootPath, parent);}}function loadMiddleware(fileName, apiPath) {const basename = path.basename(fileName);if (basename.indexOf("Middleware") !== -1) {log.info(`registering middleware ${filename}`);router.use(require("." + parent + "/" + path.basename(filename, ".js")));}}loadMiddlewares(path.join(__dirname, "api"));
/* ##### DO NOT CHANGE ANYTHING ABOVE THIS LINE ##### */

module.exports = router;
