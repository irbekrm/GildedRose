const expect = require('chai').expect,
  BrieWrapper = require('../../models/brieWrapper'),
  Item = function(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  };

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
