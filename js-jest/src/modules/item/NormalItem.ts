import Item from './Item';

export default class NormalItem extends Item {
    updateQuality() {
        if (this.quality > 0) {
            this.quality = this.quality - 1;
        }

        this.sellIn = this.sellIn - 1;

        if (this.sellIn < 0 && this.quality > 0) {
            this.quality = this.quality - 1;
        }
    }
}
