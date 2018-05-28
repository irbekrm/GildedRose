'use strict';

const expect = require('chai').expect,
  Shop = require('../../models/shop'),
  Item = function(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  };

describe('shop instance', _ => {
  it('has items array set to empty array by default', done => {
    const shop1 = new Shop();
    expect(shop1.items).to.deep.equal([]);
  done();
  });

  it('has items array set to argument array if one exists', done => {
    const item1 = new Item('Random', 23, 3),
      item2 = new Item('Another', 3, 8),
      items = [item1, item2],
      shop = new Shop([item1, item2]);
    expect(shop.items).to.deep.equal(items);
  done();
  });
});
