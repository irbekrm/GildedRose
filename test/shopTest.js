const expect = require('chai').expect,
      Shop = require('../models/shop'),
      fakeItems = [{ sellIn: 10, name: 'grapes', quality: 5 },
      { name: 'moose steak', quality: 20, sellIn: 3 },
      { name: 'birch sap', sellIn: 15, quality: 17 }];

var shop;

beforeEach(done => {
  shop = new Shop(fakeItems);
  done();
});

describe('non-special items', _ => {
  it('sellIn date is decreased by one at the end of the day', done => {
    const expectedSellIns = shop.items.map(item => item.sellIn - 1);
    shop.updateQuality();
    expect(shop.items.map(item => item.sellIn)).to.deep.equal(expectedSellIns);
  done();
  });

  it('quality is decreased by one at the end of the day', done => {
    const expectedQuality = shop.items.map(item => item.quality - 1);
    shop.updateQuality();
    expect(shop.items.map(item => item.quality)).to.deep.equal(expectedQuality);
  done();
  });

  it('quality cannot be negative', done => {
    const anotherShop = new Shop([{ sellIn: 3, quality: 0, name: 'milk' }]);
    anotherShop.updateQuality();
    expect(anotherShop.items[0].quality).to.equal(0);
  done();
  });

  it('quality decreases twice as fast after the sell by date has passed', done => {
    const anotherShop = new Shop([{sellIn: 0, quality: 3, name: 'milk' }]);
    anotherShop.updateQuality();
    expect(anotherShop.items[0].quality).to.equal(1);
  done();
  });
});
