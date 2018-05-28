'use strict';

const GenericWrapper = require('./genericWrapper');

class BackstagePassWrapper extends GenericWrapper {
  constructor(item){
    super(item);
  }

  updateQuality() {
    this.sellIn <= 0 ?
    this.setState(-this.quality) :
    this.sellIn <= 5 ?
    this.setState(3) :
    this.sellIn <= 10 ?
    this.setState(2) :
    this.setState(1);
  }
}

module.exports = BackstagePassWrapper;
