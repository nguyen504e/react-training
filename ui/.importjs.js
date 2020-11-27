/* eslint import/no-commonjs: 0 */

const lodash = require('lodash');

module.exports = {
  excludes: ['./dist/**'],
  environments: ['node'],
  declarationKeyword: 'import',
  namedExports: {
    lodash: lodash.keys(lodash),
  },
};
