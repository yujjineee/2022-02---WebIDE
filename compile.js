const { spawn } = require('child_process');
const path = require('path');
const rs = require('randomstring');
const fs = require('fs-extra'); // TODO REFECTOR THIS

const run = (projectPath, category) => {
    const sourcePath = path.resolve(ROOT, projectPath);
    let docker = spawn("docker", ["run", "--rm", "-i", "-v", `${sourcePath}:/src`, "python-compile-run:1.0"]);


    return docker;
};