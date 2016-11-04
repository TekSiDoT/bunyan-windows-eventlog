'use strict';

let util = require('util');
let extend = require('util-extend');
let stream = require('stream');
// let Push = require('pushover-notifications');
let Stream = stream.Writable || stream.Stream;
let EventLog = require("../windows-eventlog/build/Release/EventLog.node").EventLog;

// Levels
let LEVELS = {
    30: 'info',
    40: 'warn',
    50: 'error',
    60: 'error',
};

/**
 * Convert level integer to level name string
 */
function levelName(level) {
    return LEVELS[level];
}

module.exports = windowsEventlog;

function windowsEventlog(options) {
    Stream.call(this);
    this.writable = true;

    this.options = extend({}, options);
    this.windowsEventlog = new EventLog(String(options.appName), "Application");
}

util.inherits(windowsEventlog, Stream);

windowsEventlog.prototype.write = function(log) {

    if(log.level >= 30) {
        log.level = levelName(log.level);
        let message = `${log.msg} \n--------------\nDetails:`

        for (let logEntry in log.logEntry) {
            if (log.logEntry.hasOwnProperty(logEntry)) {
                message += `\n${logEntry}: ${JSON.stringify(log.logEntry[logEntry])}`;
            }
        }            
        let emit = this.emit.bind(this);
        this.windowsEventlog.log(String(log.level), String(message), ()=>{}, 1000);
    }
};