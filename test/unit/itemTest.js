const expect = require('chai').expect,
      Item = require('../../models/item');

describe('creating a new item', _ => {
  it('creates a new Item instance with name, sellIn and quality set', done => {
    const item = new Item('Aged Brie', 20, 30);
    expect(item).to.be.an.instanceof(Item);
    expect(item.name).to.equal('Aged Brie');
    expect(item.sellIn).to.equal(20);
    expect(item.quality).to.equal(30);
  done();
  });
});
   
