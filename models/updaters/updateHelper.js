module.exports = {
  updateState: (item, quality=0) => {
    item.sellIn--;
    item.quality = Math.max(Math.min(item.quality += quality, 50), 0);
  }
}
