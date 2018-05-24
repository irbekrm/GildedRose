const expect = require('chai').expect;
  BackstagePass = require('../models/backstagePasses');

var backstagePass,
    backstagePass10,
    backstagePass5,
    backstagePass0;

beforeEach(done => {
  backstagePass = new BackstagePass('someConcert', 20, 4);
  backstagePass10 = new BackstagePass('someConcert', 10, 4);
  backstagePass5 = new BackstagePass('someConcert', 5, 4);
  backstagePass0 = new BackstagePass('someConcert', 0, 4);
  done();
});

describe('creating a new backstage pass instance', _ => {
  it('has a name', done => {
    expect(backstagePass.name).to.equal('someConcert');
  done();
  });

  it('has sellIn', done => {
    expect(backstagePass.sellIn).to.equal(20);
  done();
  });

  it('has quality' , done => {
    expect(backstagePass.quality).to.equal(4);
  done();
  });
});

describe('updating quality', _ => {
  it('quality increases by 1 ', done => {
    backstagePass.updateQuality();
    expect(backstagePass.quality).to.equal(5);
  done();
  });

  it('quality increases by 2 when it is 10 or less days before concert', done => {
    backstagePass10.updateQuality();
    expect(backstagePass10.quality).to.equal(6);
  done();
  });

  it('quality increases by 3 when it is 5 or less days before concert', done => {
    backstagePass5.updateQuality();
    expect(backstagePass5.quality).to.equal(7);
  done();
  });

  it('quality drops to 0 after the concert', done => {
    backstagePass0.updateQuality();
    expect(backstagePass0.quality).to.equal(0);
  done();
  });
});
