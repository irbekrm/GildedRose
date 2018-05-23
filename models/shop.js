const Item = require('./item.js');

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    const itemsList = this.items;
    const specialItems = { 
      'Aged Brie': item => this.updateBrie(item),
      'Sulfuras, Hand of Ragnaros': _ => { console.log('Hi'); /* do nothing */ },
      'Backstage passes to a TAFKAL80ETC concert': item => this.updateBackstagePasses(item)
    };
    for (var i = 0; i < itemsList.length; i++) {
      if (itemsList[i].name in specialItems) {
        specialItems[itemsList[i].name](itemsList[i]);
      } else {
        if (itemsList[i].quality > 0) {
            itemsList[i].quality = itemsList[i].quality - 1;
        }
        itemsList[i].sellIn = itemsList[i].sellIn - 1;
      if (itemsList[i].sellIn < 0) {
            if (itemsList[i].quality > 0) {
                itemsList[i].quality = itemsList[i].quality - 1;
            }
      }
    }
  }

    return itemsList;
  }; 
  updateBrie(item) {
    if(item.quality < 50) item.quality++;
    item.sellIn--;
  }

  updateBackstagePasses(item) {
    if(item.sellIn <=0) { this.updateItem(item, -item.quality); return; }
    if(item.sellIn <= 5) { this.updateItem(item, 3); return; }
    if(item.sellIn <= 10) { this.updateItem(item, 2); return; }
    this.updateItem(item, 1);
  }
  
  updateItem(item, qual=0) {
    item.sellIn--;
    item.quality = Math.min(item.quality += qual, 50);
  }    
  
}
module.exports = Shop;
