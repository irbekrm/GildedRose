const GenericWrapper = require('./genericWrapper');

class ConjuredWrapper extends GenericWrapper {
  constructor(item) {
    super(item);
  }

  updateQuality() {
    this.sellIn > 0 ?
    this.setState(-2) :
    this.setState(-4)
  }
}

module.exports = ConjuredWrapper;
