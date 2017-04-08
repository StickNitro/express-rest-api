const express = require("express");

const router = express.Router();

const fs = require("fs");
const path = require("path");
function loadControllers(rootPath, parent) {
    parent = parent || "";
    const fi = fs.lstatSync(rootPath);
    if (fi.isDirectory()) {
        const files = fs.readdirSync(rootPath);
        const apiPath = rootPath.substring(rootPath.lastIndexOf("\\")).replace("\\", "/");
        parent += apiPath;
        for (var x = 0; x < files.length; x++) {
            const file = path.join(rootPath, files[x]);
            loadControllers(file, parent);
        }
    } else {
        loadController(rootPath, parent);
    }
}

function loadController(fileName, apiPath) {
    const basename = path.basename(fileName);
    if (basename.indexOf("Controller") !== -1) {
        console.info(`registering middleware ${filename}`);
        router.use(parent, require("." + parent + "/" + path.basename(filename, ".js")));
    }
}
loadControllers(path.join(__dirname, "api"));

module.exports = router;
