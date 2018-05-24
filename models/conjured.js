const GenericItem = require('./genericItem');

class Conjured extends GenericItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.sellIn > 0 ?
    this.setState(-2) :
    this.setState(-4)
  }
}

module.exports = Conjured;
