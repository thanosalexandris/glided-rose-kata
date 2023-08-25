import Item from './Item';

export default class AgedBrieItem extends Item {
    updateQuality() {
        super.updateQuality();
        if (this.quality < 50) {
            this.quality += 1;
            if (this.sellIn < 0 && this.quality < 50) {
                this.quality += 1;
            }
        }
    }
}
