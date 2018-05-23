const Item = require('./item.js');

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    const itemsList = this.items;
    const specialItems = { 'Aged Brie': item => this.updateBrie(item)};
    for (var i = 0; i < itemsList.length; i++) {
      if (itemsList[i].name in specialItems) {
        specialItems[itemsList[i].name](itemsList[i]);
      } else {
      if (itemsList[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (itemsList[i].quality > 0) {
          if (itemsList[i].name != 'Sulfuras, Hand of Ragnaros') {
            itemsList[i].quality = itemsList[i].quality - 1;
          }
        }
      } else {
        if (itemsList[i].quality < 50) {
          itemsList[i].quality = itemsList[i].quality + 1;
          if (itemsList[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemsList[i].sellIn < 11) {
              if (itemsList[i].quality < 50) {
                itemsList[i].quality = itemsList[i].quality + 1;
              }
            }
            if (itemsList[i].sellIn < 6) {
              if (itemsList[i].quality < 50) {
                itemsList[i].quality = itemsList[i].quality + 1;
              }
            }
          }
        }
      }
      if (itemsList[i].name != 'Sulfuras, Hand of Ragnaros') {
        itemsList[i].sellIn = itemsList[i].sellIn - 1;
      }
      if (itemsList[i].sellIn < 0) {
          if (itemsList[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemsList[i].quality > 0) {
              if (itemsList[i].name != 'Sulfuras, Hand of Ragnaros') {
                itemsList[i].quality = itemsList[i].quality - 1;
              }
            }
          } else {
            itemsList[i].quality = itemsList[i].quality - itemsList[i].quality;
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
}
module.exports = Shop;
