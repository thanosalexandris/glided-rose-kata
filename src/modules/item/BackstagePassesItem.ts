import Item from "./Item";
import { UpdateableItem } from "./contracts/UpdateableItem";

export default class BackstagePassItem extends Item implements UpdateableItem {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;

      if (this.sellIn < 11 && this.quality < 50) {
        this.quality += 1;
      }

      if (this.sellIn < 6 && this.quality < 50) {
        this.quality += 1;
      }
    }

    this.sellIn -= 1;

    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}
