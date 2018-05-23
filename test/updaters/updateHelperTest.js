'use strict';

({ expect } = require('chai'));
({ updateState } = require('../../models/updaters/updateHelper'));

var item,
    bigItem,
    smallItem;

beforeEach(done => {
  item = { sellIn: 2, quality: 23 };
  bigItem = { sellIn: 2, quality: 49 };
  smallItem = { sellIn: 2, quality: 1 };
  done();
});

describe('updating state', _ => {
  it("decreases item's sellIn property by 1", done => {
    updateState(item, 2);
    expect(item.sellIn).to.equal(1);
  done();
  });

  it("updates quality by the specified amount", done => {
    updateState(item, 2);
    expect(item.quality).to.equal(25);
  done();
  });

  it("does not allow the quality to exceed 50", done => {
    updateState(bigItem, 2);
    expect(bigItem.quality).to.equal(50);
  done();
  });

  it("does not allow the quality to get below 0", done => {
    updateState(smallItem, -3);
    expect(smallItem.quality).to.equal(0);
  done();
  });
});
