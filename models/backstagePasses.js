const GenericItem = require('./genericItem');

class BackstagePass extends GenericItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  
  updateQuality() {
    this.sellIn <= 0 ?
    this.setState(-this.quality) :
    this.sellIn <= 5 ?
    this.setState(3) :
    this.sellIn <= 10 ?
    this.setState(2) :
    this.setState(1)
  }
}

module.exports = BackstagePass;
