({ updateState } = require('./updateHelper'));

module.exports = {
  genericUpdate: item => {
    if(item.quality === 0) { updateState(item); return };
    if(item.sellIn <= 0) { updateState(item, -2); return };
    updateState(item, -1);
  }
} 
