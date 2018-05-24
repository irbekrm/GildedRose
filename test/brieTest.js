const expect = require('chai').expect,
  Brie = require('../models/brie');

var brie;

beforeEach(done => {
  brie = new Brie('Aged Brie', 4, 5);
  done();
});

describe('creating a new brie', _ => {
  it('has a name', done => {
    expect(brie.name).to.equal('Aged Brie');
  done();
  });

  it('has a sellIn', done => {
    expect(brie.sellIn).to.equal(4);
  done();
  });

  it('has quality', done => {
    expect(brie.quality).to.equal(5);
  done();
  });
});
