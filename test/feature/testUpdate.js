'use strict';

const expect = require('chai').expect,
  Shop = require('../../models/shop'),
  Item = require('../../models/item');

var items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Sulfuras, Hand of Ragnaros', -1, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  new Item('Conjured Mana Cake', 3, 6)],
  shop = new Shop(items);

describe('updating shop items', _ => {
    shop.updateQuality();
    const newQualities = shop.items.map(item => item.quality),
      newSellIns = shop.items.map(item => item.sellIn);
  it('updates quality correctly for each item', done => {
    expect(newQualities).to.deep.equal([19, 1, 6, 80, 80, 21, 50, 50, 4]);
  done();
  });

  it('updates sellIn correctly for each item', done => {
    expect(newSellIns).to.deep.equal([9, 1, 4, 0, -1, 14, 9, 4, 2]);
  done();
  });
});


