const BrieWrapper = require('./brieWrapper'),
  ConjuredWrapper = require('./conjuredWrapper'),
  SulfurasWrapper = require('./sulfurasWrapper'),
  BackstagePassWrapper = require('./backstagePassWrapper'),
  GenericWrapper = require('./genericWrapper'),

  specialItemNames = {
    'Aged Brie': BrieWrapper,
    'Sulfuras, Hand of Ragnaros': SulfurasWrapper,
    'Backstage passes to a TAFKAL80ETC concert': BackstagePassWrapper,
    'Conjured Mana Cake': ConjuredWrapper
 }; 
    
  
class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      var itemClass = specialItemNames[item.name] || GenericWrapper;
      (new itemClass(item)).updateQuality();
    });
  return this.items;
  } 
}

module.exports = Shop;
