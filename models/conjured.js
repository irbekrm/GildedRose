const GenericItem = require('./genericItem');

class Conjured extends GenericItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

module.exports = Conjured;
