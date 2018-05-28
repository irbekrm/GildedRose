'use strict';

const expect = require('chai').expect,
  ConjuredWrapper = require('../../models/conjuredWrapper'),
  Item = function(name, sellIn, quality) {
    this.name = name;
    this.quality = quality;
    this.sellIn = sellIn;
  };

var conjuredWrapper,
  lateConjuredWrapper;

beforeEach(done => {
  conjuredWrapper = new ConjuredWrapper(new Item('Conjured Mana Cake', 3, 5));
  lateConjuredWrapper = new ConjuredWrapper(new Item('conjured', -1, 9));
  done();
});

describe('creating a new conjuredWrapper instance', _ => {
  it('has a sellIn', done => {
    expect(conjuredWrapper.sellIn).to.equal(3);
  done();
  });

  it('has a quality', done => {
    expect(conjuredWrapper.quality).to.equal(5);
  done();
  });
});

describe('updating conjured', _ => {
  it('declines in quality by 2 before expiry date', done => {
    conjuredWrapper.updateQuality();
    expect(conjuredWrapper.quality).to.equal(3);
  done();
  });

  it('declines in quality by 4 after expiry date', done => {
    lateConjuredWrapper.updateQuality();
    expect(lateConjuredWrapper.quality).to.equal(5);
  done();
  });
});
