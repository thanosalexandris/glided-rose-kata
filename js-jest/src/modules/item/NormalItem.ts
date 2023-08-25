import Item from "./Item";
import { UpdateableItem } from "./contracts/UpdateableItem";

export default class NormalItem extends Item implements UpdateableItem {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }

    this.sellIn -= 1;

    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }
}
