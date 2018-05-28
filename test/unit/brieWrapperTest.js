const expect = require('chai').expect,
  Item = require('../../models/item'),
  BrieWrapper = require('../../models/brieWrapper');

var brie;

beforeEach(done => {
  brie = new BrieWrapper(new Item('Aged Brie', 4, 5));
  done();
});

describe('creating a new brie', _ => {
  it('has a sellIn', done => {
    expect(brie.sellIn).to.equal(4);
  done();
  });

  it('has quality', done => {
    expect(brie.quality).to.equal(5);
  done();
  });
});

describe('updating brie quality', _ => {
  it('increases quality by 1', done => {
    brie.updateQuality();
    expect(brie.quality).to.equal(6);
  done();
  });
}); 
