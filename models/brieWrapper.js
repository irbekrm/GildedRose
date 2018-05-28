const GenericWrapper = require('../models/genericWrapper');

class BrieWrapper extends GenericWrapper {
  constructor(item) {
    super(item);
  }

  updateQuality() { this.setState(1) }
}

module.exports = BrieWrapper;
