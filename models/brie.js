const GenericItem = require('../models/genericItem');

class Brie extends GenericItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

}

module.exports = Brie;
