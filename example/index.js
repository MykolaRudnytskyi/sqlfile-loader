"use strict";

const sqlfileLoader = require("../lib");

let sqlfile = './example.sql';
let opts = {uglify: true};
console.log(sqlfileLoader(sqlfile, opts));