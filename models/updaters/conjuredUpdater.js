({ updateState } = require('./updateHelper'));

module.exports = {
  conjuredUpdate: item => {
    if(item.sellIn <=0){ updateState(item, -4); return };
    updateState(item, -2);
  }
}
