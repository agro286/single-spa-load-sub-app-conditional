'use strict';

const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

config.optimization.splitChunks = {
    cacheGroups: {
        default: false,
    },
};
config.optimization.runtimeChunk = false;
config.entry = [resolveApp('src/singleSpa.js')];
config.output.filename = 'static/js/[name].js';
config.output.library = 'subApp';
config.output.libraryTarget = 'window';