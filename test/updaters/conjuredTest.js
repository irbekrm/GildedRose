({ expect } = require('chai'));
({ conjuredUpdate } = require('../../models/updaters/conjuredUpdater'));

const conjured = { name: 'Conjured', quality: 21, sellIn: 3 },
  lateConjured = { name: 'Conjured', quality: 22, sellIn: -2 },
  smallConjured = { name: 'Conjured', quality: 49, sellIn: 20 };

describe('conjuredItems decrease in quality twice as fast', _ => {
  it('decreases in quality by 2 before sellIn date', done => {
    conjuredUpdate(conjured);
    expect(conjured.quality).to.equal(19);
  done();
  });
});
     
