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

describe('aged brie', _ => {
  it('increases in quality', done => {
    const anotherShop = new Shop([{ name: 'Aged Brie', quality: 20, sellIn: 2 }]);
    anotherShop.updateQuality();
    expect(anotherShop.items[0].quality).to.equal(21);
  done();
  });
});

describe('sulfuras', _ => {
  const anotherShop = new Shop([{ name: 'Sulfuras, Hand of Ragnaros', quality: 80, sellIn: 'not specified' }]);
  it('retains quality of 80', done => {
    anotherShop.updateQuality();
    expect(anotherShop.items[0].quality).to.equal(80);
  done();
  });

  it('does not update sellIn', done => {
    anotherShop.updateQuality();
    expect(anotherShop.items[0].sellIn).to.equal('not specified');
  done();
  });
});

describe('backstage passes', _ => {
  const anotherShop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert',
  quality: 20, sellIn: 11 }]);
  it('quality increases', done => {
    anotherShop.updateQuality();
    expect(anotherShop.items[0].quality).to.equal(21);
  done();
  });

  it('quality increases by 2 if it is 10 or less days before concert', done => {
    anotherShop.updateQuality();
    expect(anotherShop.items[0].quality).to.equal(23);
  done();
  });

  it('quality increases by 3 if it is 5 or less days before concert', done => {
    const extraShop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert',
    quality: 21, sellIn: 5 }]);
    extraShop.updateQuality();
    expect(extraShop.items[0].quality).to.equal(24);
  done();
  });

  it('quality drops to 0 after concert', done => {
    const plusShop = new Shop([{ name: 'Backstage passes to a TAFKAL80ETC concert',
    quality: 30, sellIn: 0 }]);
    plusShop.updateQuality();
    expect(plusShop.items[0].quality).to.equal(0);
  done();
  });
});
