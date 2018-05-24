({ expect } = require('chai').expect);
const Item = require('../models/item'),
  GenericItem = require('../models/genericItem');

var genericItem,
    bigItem,
    littleItem;

beforeEach(done => {
  genericItem = new GenericItem('juice', 20, 30);
  bigItem = new GenericItem('spinach', 10, 49);
  littleItem = new GenericItem('eggs', 3, 1);
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
    genericItem.updateState(3);
    expect(genericItem.sellIn).to.equal(19);
  done();
  });

  it('does not allow the quality to exceed 50', done => {
    bigItem.updateState(2);
    expect(bigItem.quality).to.equal(50);
  done();
  });

  it('does not allow the quality to fall below 0', done => {
    littleItem.updateState(-3);
    expect(littleItem.quality).to.equal(0);
  done();
  });
}); 

