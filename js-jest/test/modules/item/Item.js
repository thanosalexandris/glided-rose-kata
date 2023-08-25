"use strict";
// src/modules/item/Item.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
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
exports.default = Item;
