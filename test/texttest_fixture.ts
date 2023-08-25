import Shop  from '../src/modules/shop/Shop';
import NormalItem from '../src/modules/item/NormalItem';
import AgedBrieItem from '../src/modules/item/AgedBrieItem';
import BackstagePassesItem from '../src/modules/item/BackstagePassesItem';
import SulfurasItem from '../src/modules/item/SulfurasItem';
import ConjuredItem from '../src/modules/item/ConjuredItem';

describe('TextTest Fixture', () => {
    it('should handle multiple item types and update quality correctly', () => {
        const items = [
            new NormalItem('Normal Item', 10, 20),
            new AgedBrieItem('Aged Brie', 2, 0),
            new NormalItem('Elixir of the Mongoose', 5, 7),
            new SulfurasItem('Sulfuras', 0, 80),
            new SulfurasItem('Sulfuras', -1, 80),
            new BackstagePassesItem('Backstage Passes', 15, 20),
            new BackstagePassesItem('Backstage Passes', 10, 49),
            new BackstagePassesItem('Backstage Passes', 5, 49),
            new ConjuredItem('Conjured Mana Cake', 3, 6),
        ];

        const days = 2;
        const gildedRose = new Shop(items);

        for (let day = 0; day < days; day++) {
            items.forEach((item) => {
                const initialQuality = item.quality;
                const initialSellIn = item.sellIn;
                gildedRose.updateQuality();
                const updatedQuality = item.quality;
                const updatedSellIn = item.sellIn;

                // Check if the item quality is correctly updated based on its type and sellIn value
                if (item instanceof NormalItem) {
                    if (initialSellIn > 0) {
                        expect(updatedQuality).toBe(initialQuality - 1);
                    } else {
                        expect(updatedQuality).toBe(initialQuality - 2);
                    }
                } else if (item instanceof AgedBrieItem) {
                    expect(updatedQuality).toBe(initialQuality + 1);
                } else if (item instanceof BackstagePassesItem) {
                    if (initialSellIn > 10) {
                        expect(updatedQuality).toBe(initialQuality + 1);
                    } else if (initialSellIn <= 10 && initialSellIn > 5) {
                        expect(updatedQuality).toBe(initialQuality + 2);
                    } else if (initialSellIn <= 5 && initialSellIn > 0) {
                        expect(updatedQuality).toBe(initialQuality + 3);
                    } else {
                        expect(updatedQuality).toBe(0);
                    }
                } else if (item instanceof SulfurasItem) {
                    expect(updatedQuality).toBe(initialQuality);
                    expect(updatedSellIn).toBe(initialSellIn);
                } else {
                    if (initialSellIn > 0) {
                        expect(updatedQuality).toBe(initialQuality - 2);
                    } else {
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
