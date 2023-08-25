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
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(11);
        expect(items[1].sellIn).toBe(14);
        expect(items[1].quality).toBe(11);
        expect(items[2].sellIn).toBe(4);
        expect(items[2].quality).toBe(8);
        expect(items[3].sellIn).toBe(0);
        expect(items[3].quality).toBe(80);
        expect(items[4].sellIn).toBe(4);
        expect(items[4].quality).toBe(9);
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
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(15);
        expect(items[1].sellIn).toBe(10);
        expect(items[1].quality).toBe(20);
        expect(items[2].sellIn).toBe(0);
        expect(items[2].quality).toBe(0);
        expect(items[3].sellIn).toBe(0);
        expect(items[3].quality).toBe(80);
        expect(items[4].sellIn).toBe(0);
        expect(items[4].quality).toBe(5);
    });
    it('should handle an empty item list', () => {
        const items = [];
        const gildedRose = new Shop_1.default(items);
        gildedRose.updateQuality();
    });
});
