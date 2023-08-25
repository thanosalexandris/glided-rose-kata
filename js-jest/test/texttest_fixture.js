"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shop_1 = __importDefault(require("../src/modules/shop/Shop"));
const NormalItem_1 = __importDefault(require("../src/modules/item/NormalItem"));
const AgedBrieItem_1 = __importDefault(require("../src/modules/item/AgedBrieItem"));
const BackstagePassesItem_1 = __importDefault(require("../src/modules/item/BackstagePassesItem"));
const SulfurasItem_1 = __importDefault(require("../src/modules/item/SulfurasItem"));
const ConjuredItem_1 = __importDefault(require("../src/modules/item/ConjuredItem"));
describe('TextTest Fixture', () => {
    it('should handle multiple item types and update quality correctly', () => {
        const items = [
            new NormalItem_1.default('Normal Item', 10, 20),
            new AgedBrieItem_1.default('Aged Brie', 2, 0),
            new NormalItem_1.default('Elixir of the Mongoose', 5, 7),
            new SulfurasItem_1.default('Sulfuras', 0, 80),
            new SulfurasItem_1.default('Sulfuras', -1, 80),
            new BackstagePassesItem_1.default('Backstage Passes', 15, 20),
            new BackstagePassesItem_1.default('Backstage Passes', 10, 49),
            new BackstagePassesItem_1.default('Backstage Passes', 5, 49),
            new ConjuredItem_1.default('Conjured Mana Cake', 3, 6),
        ];
        const days = 2;
        const gildedRose = new Shop_1.default(items);
        for (let day = 0; day < days; day++) {
            items.forEach((item) => {
                const initialQuality = item.quality;
                const initialSellIn = item.sellIn;
                gildedRose.updateQuality();
                const updatedQuality = item.quality;
                const updatedSellIn = item.sellIn;
                // Check if the item quality is correctly updated based on its type and sellIn value
                if (item instanceof NormalItem_1.default) {
                    if (initialSellIn > 0) {
                        expect(updatedQuality).toBe(initialQuality - 1);
                    }
                    else {
                        expect(updatedQuality).toBe(initialQuality - 2);
                    }
                }
                else if (item instanceof AgedBrieItem_1.default) {
                    expect(updatedQuality).toBe(initialQuality + 1);
                }
                else if (item instanceof BackstagePassesItem_1.default) {
                    if (initialSellIn > 10) {
                        expect(updatedQuality).toBe(initialQuality + 1);
                    }
                    else if (initialSellIn <= 10 && initialSellIn > 5) {
                        expect(updatedQuality).toBe(initialQuality + 2);
                    }
                    else if (initialSellIn <= 5 && initialSellIn > 0) {
                        expect(updatedQuality).toBe(initialQuality + 3);
                    }
                    else {
                        expect(updatedQuality).toBe(0);
                    }
                }
                else if (item instanceof SulfurasItem_1.default) {
                    expect(updatedQuality).toBe(initialQuality);
                    expect(updatedSellIn).toBe(initialSellIn);
                }
                else {
                    if (initialSellIn > 0) {
                        expect(updatedQuality).toBe(initialQuality - 2);
                    }
                    else {
                        expect(updatedQuality).toBe(initialQuality - 4);
                    }
                }
                // Check if quality is within bounds
                expect(updatedQuality).toBeGreaterThanOrEqual(0);
                expect(updatedQuality).toBeLessThanOrEqual(50);
                // Check if sellIn is correctly updated
                expect(updatedSellIn).toBe(initialSellIn - 1);
            });
        }
    });
});
