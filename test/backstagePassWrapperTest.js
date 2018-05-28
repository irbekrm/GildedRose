const expect = require('chai').expect,
  Item = require('../models/item'),
  BackstagePassWrapper = require('../models/backstagePassWrapper');

var backstagePassWrapper,
    backstagePassWrapper10,
    backstagePassWrapper5,
    backstagePassWrapper0;

beforeEach(done => {
  backstagePassWrapper = new BackstagePassWrapper(new Item('someConcert', 20, 4));
  backstagePassWrapper10 = new BackstagePassWrapper(new Item('someConcert', 10, 4));
  backstagePassWrapper5 = new BackstagePassWrapper(new Item('someConcert', 5, 4));
  backstagePassWrapper0 = new BackstagePassWrapper(new Item('someConcert', 0, 4));
  done();
});

describe('creating a new backstage pass instance', _ => {
  it('has sellIn', done => {
    expect(backstagePassWrapper.sellIn).to.equal(20);
  done();
  });

  it('has quality' , done => {
    expect(backstagePassWrapper.quality).to.equal(4);
  done();
  });
});

describe('updating quality', _ => {
  it('quality increases by 1 ', done => {
    backstagePassWrapper.updateQuality();
    expect(backstagePassWrapper.quality).to.equal(5);
  done();
  });

  it('quality increases by 2 when it is 10 or less days before concert', done => {
    backstagePassWrapper10.updateQuality();
    expect(backstagePassWrapper10.quality).to.equal(6);
  done();
  });

  it('quality increases by 3 when it is 5 or less days before concert', done => {
    backstagePassWrapper5.updateQuality();
    expect(backstagePassWrapper5.quality).to.equal(7);
  done();
  });

  it('quality drops to 0 after the concert', done => {
    backstagePassWrapper0.updateQuality();
    expect(backstagePassWrapper0.quality).to.equal(0);
  done();
  });
});
