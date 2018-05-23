({ updateState } = require('./updateHelper'));

module.exports = {
  backstagePassesUpdate: item => {
    if(item.sellIn <= 0) { updateState(item, -item.quality); return };
    if(item.sellIn <= 5) { updateState(item, 3); return };
    if(item.sellIn <= 10) { updateState(item, 2); return };
    updateState(item, 1);
  }
} 
