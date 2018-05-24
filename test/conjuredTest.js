const expect= require('chai').expect,
  Conjured = require('../models/conjured');

var conjured,
  lateConjured;

beforeEach(done => {
  conjured = new Conjured('conjured', 3, 5);
  lateConjured = new Conjured('conjured', -1, 9);
  done();
});

describe('creating a new conjured instance', _ => {
  it('has a name', done => {
    expect(conjured.name).to.equal('conjured');
  done();
  });

  it('has a sellIn', done => {
    expect(conjured.sellIn).to.equal(3);
  done();
  });

  it('has a quality', done => {
    expect(conjured.quality).to.equal(5);
  done();
  });
});

describe('updating conjured', _ => {
  it('declines in quality by 2 before expiry date', done => {
    conjured.updateQuality();
    expect(conjured.quality).to.equal(3);
  done();
  });

  it('declines in quality by 4 after expiry date', done => {
    lateConjured.updateQuality();
    expect(lateConjured.quality).to.equal(5);
  done();
  });
});
