'use strict';

class GenericWrapper {
  constructor(item) {
    this.item = item;
  }
  set quality(quality) { this.item.quality = quality; }
  get quality() { return this.item.quality; }

  set sellIn(sellIn) { this.item.sellIn = sellIn; }
  get sellIn() { return this.item.sellIn; }

  setState(quality) {
    this.sellIn = this.sellIn - 1;
    this.quality = Math.max(Math.min(this.quality += quality, 50), 0);
  }

  updateQuality() {
    this.sellIn > 0 ? this.setState(-1) : this.setState(-2);
  }
}

module.exports = GenericWrapper;
