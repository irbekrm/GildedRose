const GenericItem = require('../models/genericItem');

class Brie extends GenericItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() { this.setState(1) }
}

module.exports = Brie;
