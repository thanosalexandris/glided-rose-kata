"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shop_1 = __importDefault(require("../../../src/modules/shop/Shop"));
const AgedBrieItem_1 = __importDefault(require("../../../src/modules/item/AgedBrieItem"));
const BackstagePassesItem_1 = __importDefault(require("../../../src/modules/item/BackstagePassesItem"));
const ConjuredItem_1 = __importDefault(require("../../../src/modules/item/ConjuredItem"));
const NormalItem_1 = __importDefault(require("../../../src/modules/item/NormalItem"));
const SulfurasItem_1 = __importDefault(require("../../../src/modules/item/SulfurasItem"));
describe('Shop', () => {
    it('should update quality for multiple items', () => {
        const items = [
            new AgedBrieItem_1.default('Aged Brie', 5, 10),
            new BackstagePassesItem_1.default('Backstage Passes', 15, 10),
            new ConjuredItem_1.default('Conjured', 5, 10),
            new SulfurasItem_1.default('Sulfuras', 0, 80),
            new NormalItem_1.default('Normal Item', 5, 10),
        ];
        const gildedRose = new Shop_1.default(items);
        gildedRose.updateQuality();
        // You can access the updateQuality method without specifying properties
        items.forEach(item => item.updateQuality());
    });
    it('should correctly update quality for multiple days', () => {
        const items = [
            new AgedBrieItem_1.default('Aged Brie', 5, 10),
            new BackstagePassesItem_1.default('Backstage Passes', 15, 10),
            new ConjuredItem_1.default('Conjured', 5, 10),
            new SulfurasItem_1.default('Sulfuras', 0, 80),
            new NormalItem_1.default('Normal Item', 5, 10),
        ];
        const gildedRose = new Shop_1.default(items);
        // Simulate 5 days passing
        for (let i = 0; i < 5; i++) {
            gildedRose.updateQuality();
        }
        // You can access the updateQuality method without specifying properties
        items.forEach(item => item.updateQuality());
    });
    it('should handle an empty item list', () => {
        const items = [];
        const gildedRose = new Shop_1.default(items);
        gildedRose.updateQuality();
    });
});
