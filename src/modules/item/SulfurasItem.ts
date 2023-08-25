import Item from "./Item";
import { UpdateableItem } from "./contracts/UpdateableItem";

export default class SulfurasItem extends Item implements UpdateableItem {
  updateQuality() {
    const quality = this.quality;
    const sellIn = this.sellIn;

    this.quality = quality;
    this.sellIn = sellIn;
  }
}
