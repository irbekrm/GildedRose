({ expect } = require('chai').expect);
const Item = require('../models/item'),
  GenericItem = require('../models/genericItem');

var genericItem;

before(done => {
  genericItem = new GenericItem('juice', 20, 30);
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
