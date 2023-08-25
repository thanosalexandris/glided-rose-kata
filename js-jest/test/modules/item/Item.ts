// src/modules/item/Item.ts

export default class Item {
    constructor(public name: string, public sellIn: number, public quality: number) {}

    updateQuality() {
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
            this.sellIn -= 1;

            if (this.quality > 0) {
                this.quality -= 1;
                if (this.sellIn < 0) {
                    this.quality -= 1;
                }
            }
        }
    }
}
