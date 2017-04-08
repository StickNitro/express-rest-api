const express = require("express");
const cors = require("cors");

const router = express.Router();

// set CORS for all routes
router.all("*", cors());

const fs = require("fs");
const path = require("path");
function loadMiddlewares(rootPath, parent) {
    parent = parent || "";
    const fi = fs.lstatSync(rootPath);
    if (fi.isDirectory()) {
        const files = fs.readdirSync(rootPath);
        const apiPath = rootPath.substring(rootPath.lastIndexOf("\\")).replace("\\", "/");
        parent += apiPath;
        for (var x = 0; x < files.length; x++) {
            const file = path.join(rootPath, files[x]);
            loadMiddlewares(file, parent);
        }
    } else {
        loadMiddleware(rootPath, parent);
    }
}

function loadMiddleware(fileName, apiPath) {
    const basename = path.basename(fileName);
    if (basename.indexOf("Middleware") !== -1) {
        console.info(`registering middleware ${filename}`);
        router.use(require("." + parent + "/" + path.basename(filename, ".js")));
    }
}
loadMiddlewares(path.join(__dirname, "api"));

module.exports = router;
