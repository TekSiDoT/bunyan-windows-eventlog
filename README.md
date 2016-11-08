# bunyan-windows-eventlog

[![Latest Version](https://img.shields.io/npm/v/bunyan-windows-eventlog.svg?style=flat-square)](https://npmjs.org/package/bunyan-windows-eventlog)

> bunyan to windows eventlog stream

Middleware connecting the excellent bunyan logging system to the windows eventlog. It relies on the native Windows API implementation of the node-windows-eventlog package. 

## Installation

    npm install bunyan-windows-eventlog --save 

### Note concerning the compilation of the native module windows-eventlog:

Please check out the [readme of the windows-eventlog module](https://github.com/jfromaniello/node-windows-eventlog) for information regarding its compilation. 

Additionally, make sure you have the latest npm version installed and you are compiling the native module with the same version of node you intend to use your application with.

I am currently investigating the possibility to compile the native module from a Docker based linux container.

### Note concerning Webpack:

When using Webpack you will have to additionally install the [node-loader package](https://www.npmjs.com/package/node-loader) and make sure that the module property in your webpack.config.js contains the following entry:

    module: {
        loaders: [
            { test: /\.node$/, loader: "node-loader" }
        ]
    },

## Example

Require the library:

    var WindowsEventLog = require('bunyan-windows-eventlog');

Instantiate your bunyan logger:

    var appName = 'MyApp';
    var log = bunyan.createLogger({
        name: appName,
        streams: {
            level: 'info',
            type: 'raw',
            stream: new WindowsEventLog({ 
                appName: appName 
                })
            }
        level: 'info'
        });

Create a log entry:

    log.info({
        foo: 'bar'
    }, 'hello world');

### loglevel-mapping

The windows eventlog only knows three basic loglevels: *info*, *warning* and *error*. The bunyan loglevels currently have the following hardwired mapping:
    
* 10 trace -> ignored
* 20 debug -> ignored
* 30 info -> info
* 40 warning -> warning
* 50 error -> error 
* 60 fatal -> error

This mapping is planned become configurable in one of the next releases.

## Changelog:

### [1.0.4] 

* Cosmetics

### [1.0.3]

* Removes Win32 restrictions to enable compilation on Linux and its derivatives

### [1.0.2]

* Cosmetic Changes

## Todo:

* Enable custom loglevel mapping
* Enable custom status id setting (windows-eventlog update necessary)
* Tests

## License

MIT License. (c) 2016 [Jens Habegger](jfc.habegger@gmail.com).

