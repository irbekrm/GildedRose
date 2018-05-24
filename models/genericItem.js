const Item = require('../models/item');

class GenericItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

module.exports = GenericItem;
