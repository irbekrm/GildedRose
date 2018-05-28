const expect = require('chai').expect,
  SulfurasWrapper = require('../models/sulfurasWrapper'),
  Item = require('../models/item');

var sulfuras = new SulfurasWrapper(new Item('sulfuras', 0, 80));

describe('sulfuras wrapper', _ => {
  it('sulfuras sellIn is not being updated', done => {
    sulfuras.updateQuality();
    expect(sulfuras.sellIn).to.equal(0);
  done();
  });

  it('sulfuras quality is not being updated', done => {
    sulfuras.updateQuality();
    expect(sulfuras.quality).to.equal(80);
  done();
  });
});
  
