const GenericItem = require('./genericItem');

class BackstagePass extends GenericItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

module.exports = BackstagePass;
