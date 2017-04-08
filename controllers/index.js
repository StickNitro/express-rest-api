const log4js = require("log4js");
const express = require("express");

const log = log4js.getLogger("controllers");

const router = express.Router();

/* ##### DO NOT CHANGE ANYTHING BELOW THIS LINE ##### */
/*This is the middleware loader, it will dynamically load middleware instances from the nested folder structure below this folder, the only caveat is that the middleware file must contain the word Middleware in its name */const fs = require("fs");const path = require("path");function loadControllers(rootPath, parent) {parent = parent || "";const fi = fs.lstatSync(rootPath);if (fi.isDirectory()) {const files = fs.readdirSync(rootPath);const apiPath = rootPath.substring(rootPath.lastIndexOf("\\")).replace("\\", "/");parent += apiPath;for (var x = 0; x < files.length; x++) {const file = path.join(rootPath, files[x]);loadControllers(file, parent);}} else {loadController(rootPath, parent);}}function loadController(fileName, apiPath) {const basename = path.basename(fileName);if (basename.indexOf("Controller") !== -1) {log.info(`registering middleware ${filename}`);router.use(parent, require("." + parent + "/" + path.basename(filename, ".js")));}}loadControllers(path.join(__dirname, "api"));
/* ##### DO NOT CHANGE ANYTHING ABOVE THIS LINE ##### */

router.get("*", (req, res) => {
    res.status(404).send();
});

module.exports = router;
