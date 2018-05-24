({ expect } = require('chai').expect);
const Item = require('../models/item'),
  GenericItem = require('../models/genericItem');

var genericItem,
    bigItem,
    littleItem,
    oldItem;

beforeEach(done => {
  genericItem = new GenericItem('juice', 20, 30);
  bigItem = new GenericItem('spinach', 10, 49);
  littleItem = new GenericItem('eggs', 3, 1);
  oldItem = new GenericItem('pasta', -1, 4);
  done();
}); 

describe('new generic item', _ => {
  it('has a name', done => {
    expect(genericItem.name).to.equal('juice');
    expect(genericItem.sellIn).to.equal(20);
    expect(genericItem.quality).to.equal(30);
  done();
  });
});

describe('updating state of an item', _ => {
  it('decreases the sellIn by 1', done => {
    genericItem.setState(3);
    expect(genericItem.sellIn).to.equal(19);
  done();
  });

  it('does not allow the quality to exceed 50', done => {
    bigItem.setState(2);
    expect(bigItem.quality).to.equal(50);
  done();
  });

  it('does not allow the quality to fall below 0', done => {
    littleItem.setState(-3);
    expect(littleItem.quality).to.equal(0);
  done();
  });
}); 

describe('updating quality of an item', _ => {
  it('quality decreased by 1 before sell by date', done => {
    genericItem.updateQuality();
    expect(genericItem.quality).to.equal(29);
  done();
  });

  it('quality decreased by 2 after sell by date', done => {
    oldItem.updateQuality();
    expect(oldItem.quality).to.equal(2);
  done();
  }); 
});
