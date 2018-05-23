({ brieUpdate } = require('./updaters/brieUpdater'));
({ backstagePassesUpdate } = require('./updaters/backstagePassesUpdater'));
({ genericUpdate } = require('./updaters/genericUpdater'));

const Item = require('./item.js'),
  specialItems = { 
    'Aged Brie': item => brieUpdate(item),
    'Sulfuras, Hand of Ragnaros': _ => { /* do nothing */ },
    'Backstage passes to a TAFKAL80ETC concert': item =>  backstagePassesUpdate(item)
  };

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      const name = item.name;
      specialItems[name] ?
      specialItems[name](item) :
      genericUpdate(item)
    });
  return this.items;
  } 
}

module.exports = Shop;
