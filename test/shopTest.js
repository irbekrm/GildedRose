const expect = require('chai').expect,
  Shop = require('../models/shop'),
  Brie = require('../models/brie'),
  Conjured = require('../models/conjured'),
  BackstagePasses = require('../models/backstagePasses');

var aShop,
  aBrie,
  aConjured,
  aBackstagePasses;

before(done => {
  aBrie = new Brie('Brie', 3, 8);
  aConjured = new Conjured('This is Conjured', 4, 9);
  aBackstagePasses = new BackstagePasses('Pass', 3, 9);
  aShop = new Shop([aBrie, aConjured, aBackstagePasses]);
  done();
});

describe('updating Quality', _ => {
  it('calls the relevant updateQuality method of each', done => {
    aShop.updateQuality();
    const result = aShop.items.map(item => item.quality);
    expect(result).to.deep.equal([9, 7, 12]);
  done();
  });
});


