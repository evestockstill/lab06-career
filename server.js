const app = require('./lib/app');
const colors = require('colors')
const { createServer } = require('net')












app.listen(7890, () => {
  console.log('Application started!'.bgCyan);
});