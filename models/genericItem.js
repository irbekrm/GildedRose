const Item = require('../models/item');

class GenericItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  
  setState(quality=0) {
    this.sellIn--;
    this.quality = Math.max(Math.min(this.quality += quality, 50), 0);
  }

  updateQuality() {
    this.sellIn > 0 ? this.setState(-1) : this.setState(-2);
  }
}

module.exports = GenericItem;
