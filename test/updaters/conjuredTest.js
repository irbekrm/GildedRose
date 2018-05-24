({ expect } = require('chai'));
({ conjuredUpdate } = require('../../models/updaters/conjuredUpdater'));

const conjured = { name: 'Conjured', quality: 21, sellIn: 3 },
  lateConjured = { name: 'Conjured', quality: 22, sellIn: -2 };

describe('conjuredItems decrease in quality twice as fast', _ => {
  it('decreases in quality by 2 before sellIn days', done => {
    conjuredUpdate(conjured);
    expect(conjured.quality).to.equal(19);
  done();
  });

  it('decreases in quality by 4 after sellIn days', done => {
    conjuredUpdate(lateConjured);
    expect(lateConjured.quality).to.equal(18);
  done();
  });
});
     
