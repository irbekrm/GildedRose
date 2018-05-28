const expect = require('chai').expect,
  Item = require('../../models/item'),
  GenericWrapper = require('../../models/genericWrapper');

var genericWrapper,
    bigWrapper,
    littleWrapper,
    oldWrapper;

beforeEach(done => {
  genericWrapper = new GenericWrapper(new Item('juice', 20, 30));
  bigWrapper = new GenericWrapper(new Item('spinach', 10, 49));
  littleWrapper = new GenericWrapper(new Item('eggs', 3, 1));
  oldWrapper = new GenericWrapper(new Item('pasta', -1, 4));
  done();
}); 

describe('new generic item', _ => {
  it('has quality and sellIn', done => {
    expect(genericWrapper.sellIn).to.equal(20);
    expect(genericWrapper.quality).to.equal(30);
  done();
  });
});

describe('updating state of an item', _ => {
  it('decreases the sellIn by 1', done => {
    genericWrapper.setState(3);
    expect(genericWrapper.sellIn).to.equal(19);
  done();
  });

  it('does not allow the quality to exceed 50', done => {
    bigWrapper.setState(2);
    expect(bigWrapper.quality).to.equal(50);
  done();
  });

  it('does not allow the quality to fall below 0', done => {
    littleWrapper.setState(-3);
    expect(littleWrapper.quality).to.equal(0);
  done();
  });
}); 

describe('updating quality of an item', _ => {
  it('quality decreased by 1 before sell by date', done => {
    genericWrapper.updateQuality();
    expect(genericWrapper.quality).to.equal(29);
  done();
  });

  it('quality decreased by 2 after sell by date', done => {
    oldWrapper.updateQuality();
    expect(oldWrapper.quality).to.equal(2);
  done();
  }); 
});
