const repl = require('repl'),
  context = repl.start('$ ').context;

  context.Shop = require('./models/shop');
  context.Item = require('./models/item');
