# bunyan-windows-eventlog

[![Latest Version](https://img.shields.io/npm/v/bunyan-windows-eventlog.svg?style=flat-square)](https://npmjs.org/package/bunyan-windows-eventlog)

> bunyan to windows eventlog stream

Middleware connecting the excellent bunyan logging system to the windows eventlog. It relies on the native Windows API implementation of the node-windows-eventlog package. 

## Installation

    npm install bunyan-windows-eventlog --save 

### Note concerning the compilation of the native module windows-eventlog:

Please check out the [readme of the windows-eventlog module](https://github.com/jfromaniello/node-windows-eventlog) for information regarding its compilation. 

Additionally, make sure you have the latest npm version installed and you are compiling the native module with the same version of node you intend to use your application with.

### Note concerning Webpack:

When using Webpack you will have to additionally install the [node-loader package](https://www.npmjs.com/package/node-loader) and make sure that the module property in your webpack.config.js contains the following entry:

    module: {
        loaders: [
            { test: /\.node$/, loader: "node-loader" }
        ]
    },

## Example

> Todo

## Todo:

* Write Installation / Examples documentation
* Enable custom log level mapping
* Enable custom status id setting (windows-eventlog update necessary)
* Tests?

## License

MIT License. (c) 2016 [Jens Habegger](jfc.habegger@gmail.com).