import Item from "./Item";
export default class SulfurasItem extends Item {
    updateQuality() {
        const quality = this.quality;
        const sellIn = this.sellIn;
        this.quality = quality;
        this.sellIn = sellIn;
    }
}
