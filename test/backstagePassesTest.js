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


