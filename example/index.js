"use strict";

const sqlfileLoader = require('../lib');

let sqlfile = './example.sql'; // Path to an sql file
let opts = {uglify: true};

let result = sqlfileLoader(sqlfile, opts);

console.log('result:', result);