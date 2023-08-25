"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shop {
    constructor(items) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach(item => item.updateQuality());
        return this.items;
    }
}
exports.default = Shop;
