const GenericWrapper = require('./genericWrapper');

class SulfurasWrapper extends GenericWrapper {
  constructor(item) {
    super(item);
    this.item = item;
  }

  updateQuality() { /* do nothing */ }
}

module.exports = SulfurasWrapper;
