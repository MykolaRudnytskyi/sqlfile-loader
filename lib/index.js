/*jslint node: true */
'use strict';

const fs = require('fs');
const minify = require('pg-minify');
/**
 * sqlfileLoader
 * Basic SQL file loader with uglify option
 *
 * @name sqlfileLoader
 * @function
 * @param {string} sqlfile The full file path to sql file.
 * @param {object} opts Optional object used to set uglify true option.
 * @return {string} Content of sql file.
 */
module.exports = function sqlfileLoader(sqlfile, opts) {

    if (typeof sqlfile !== 'string') {
        throw new TypeError("Sqlfile must be a text string.");
    }
    if (opts !== undefined && typeof(opts) !== 'object') {
        throw new TypeError("Parameter 'opts' must be an object.");
    }
    let sql;
    let uglify = opts && opts.uglify;

    try {
        sql = fs.readFileSync(sqlfile, 'utf8');
    } catch (err) {
        return err.toString();
    }
    if (uglify) {
        return minify(sql);
    }
    return sql;
};