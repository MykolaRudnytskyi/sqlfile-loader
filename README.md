# sqlfile-loader

> Basic SQL file loader with uglify option.

## Installation

```sh
$ npm i --save sqlfile-loader
```
or 
```sh
$ yarn add sqlfile-loader
```
## Example

```js
const sqlfileLoader = require('sqlfile-loader');

let sqlfile = './example.sql'; // Path to an sql file
let opts = {uglify: true};

let result = sqlfileLoader(sqlfile, opts);

console.log('result:', result);
```

## Documentation


### `sqlfileLoader(sqlfile, opts)`
Basic SQL file loader with uglify option.

#### Params
- **string** `sqlfile`: The full file path to sql file.
- **object** `opts`: Optional object used to set uglify true option.

#### Return
- **string** Content of sql file.
