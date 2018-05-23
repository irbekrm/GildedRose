const Item = require('./item.js');

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    const itemsList = this.items;
    const specialItems = { 'Aged Brie': item => updateBrie(item)};
    for (var i = 0; i < itemsList.length; i++) {
      if (i in specialItems) {
        specialItems[items[i]](i) 
      } else {
      if (itemsList[i].name != 'Aged Brie' && itemsList[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
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
        if (itemsList[i].name != 'Aged Brie') {
          if (itemsList[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (itemsList[i].quality > 0) {
              if (itemsList[i].name != 'Sulfuras, Hand of Ragnaros') {
                itemsList[i].quality = itemsList[i].quality - 1;
              }
            }
          } else {
            itemsList[i].quality = itemsList[i].quality - itemsList[i].quality;
          }
        } else {
          if (itemsList[i].quality < 50) {
            itemsList[i].quality = itemsList[i].quality + 1;
          }
        }
      }
    }
  }

    return itemsList;
  }; 
  updateBrie(item) {
    console.log('WORKING');
    if(item.quality < 50) item.quality++;
    item.sellIn++;
  }
}
module.exports = Shop;
