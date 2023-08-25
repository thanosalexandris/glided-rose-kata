import Item from "./Item";
export default class NormalItem extends Item {
    updateQuality() {
        if (this.name !== 'Legendary Item') {
            if (this.quality > 0) {
                this.quality -= 1;
            }
            this.sellIn -= 1;
            if (this.sellIn < 0 && this.quality > 0) {
                this.quality -= 1;
            }
        }
    }
}
