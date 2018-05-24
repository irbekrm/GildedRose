const Item = require('../models/item');

class GenericItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  
  updateState(quality=0) {
    this.sellIn--;
    this.quality = Math.max(Math.min(this.quality += quality, 50), 0);
  }
}

module.exports = GenericItem;
