const fs = require('fs');

const path = ('path');

module.exports =  app => {
  fs
  .readdirSync(__dirname)
  .filter(file => ((file.indexOf.indexOf('.')) !== 0 && (file !== 'index.js')))
  .forEach(file => require(path.resolve(__dirname, file))(app))
};