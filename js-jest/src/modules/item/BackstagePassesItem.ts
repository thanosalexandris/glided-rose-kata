import Item from './Item';

export default class BackstagePassesItem extends Item {
    updateQuality() {
        super.updateQuality();
        if (this.sellIn < 0) {
            this.quality = 0;
        } else if (this.quality < 50) {
            this.quality += 1;
            if (this.sellIn < 11 && this.quality < 50) {
                this.quality += 1;
            }
            if (this.sellIn < 6 && this.quality < 50) {
                this.quality += 1;
            }
        }
    }
}
