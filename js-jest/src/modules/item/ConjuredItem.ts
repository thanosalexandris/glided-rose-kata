import Item from './Item';

export default class ConjuredItem extends Item {
    updateQuality() {
        super.updateQuality();
        if (this.quality > 0) {
            this.quality -= 2;
            if (this.sellIn < 0 && this.quality > 0) {
                this.quality -= 2;
            }
        }
    }
}
