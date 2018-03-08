"use strict";


module.exports.db = () => {
    const dbconf = require('./database.json');
    let dbConfig = dbconf.live;
    if(process.env.NODE_ENV === "development") {
        dbConfig = dbconf.dev;
    }
    return dbConfig;
};


module.exports.aws = () => {
    const dbconf = require('./aws.json');
    let dbConfig = dbconf.live;
    if(process.env.NODE_ENV === "development") {
        dbConfig = dbconf.dev;
    }
    return dbConfig;
};


module.exports.const = () => {
    const dbconf = require('./const.json');
    let dbConfig = dbconf.live;
    if(process.env.NODE_ENV === "development") {
        dbConfig = dbconf.dev;
    }
    return dbConfig;
};