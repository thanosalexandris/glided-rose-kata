import Shop from '../../../src/modules/shop/Shop';
import UpdateableItem from '../../../src/modules/item/contracts/UpdateableItem';
import AgedBrieItem from '../../../src/modules/item/AgedBrieItem';
import BackstagePassesItem from '../../../src/modules/item/BackstagePassesItem';
import ConjuredItem from '../../../src/modules/item/ConjuredItem';
import NormalItem from '../../../src/modules/item/NormalItem';
import SulfurasItem from '../../../src/modules/item/SulfurasItem';

describe('Shop', () => {
    it('should update quality for multiple items', () => {
        const items: UpdateableItem[] = [
            new AgedBrieItem('Aged Brie', 5, 10),
            new BackstagePassesItem('Backstage Passes', 15, 10),
            new ConjuredItem('Conjured', 5, 10),
            new SulfurasItem('Sulfuras', 0, 80),
            new NormalItem('Normal Item', 5, 10),
        ];

        const gildedRose = new Shop(items);
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
        const items: UpdateableItem[] = [
            new AgedBrieItem('Aged Brie', 5, 10),
            new BackstagePassesItem('Backstage Passes', 15, 10),
            new ConjuredItem('Conjured', 5, 10),
            new SulfurasItem('Sulfuras', 0, 80),
            new NormalItem('Normal Item', 5, 10),
        ];

        const gildedRose = new Shop(items);
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
        const items: UpdateableItem[] = [];
        const gildedRose = new Shop(items);
        gildedRose.updateQuality();
    });
});
