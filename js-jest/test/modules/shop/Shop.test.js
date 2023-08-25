import Shop from '../../../src/modules/shop/Shop';
import AgedBrieItem from '../../../src/modules/item/AgedBrieItem';
import BackstagePassesItem from '../../../src/modules/item/BackstagePassesItem';
import ConjuredItem from '../../../src/modules/item/ConjuredItem';
import NormalItem from '../../../src/modules/item/NormalItem';
import SulfurasItem from '../../../src/modules/item/SulfurasItem';
describe('Shop', () => {
    it('should update quality for multiple items', () => {
        const items = [
            new AgedBrieItem('Aged Brie', 5, 10),
            new BackstagePassesItem('Backstage Passes', 15, 10),
            new ConjuredItem('Conjured', 5, 10),
            new SulfurasItem('Sulfuras', 0, 80),
            new NormalItem('Normal Item', 5, 10),
        ];
        const gildedRose = new Shop(items);
        gildedRose.updateQuality();
        // You can access the updateQuality method without specifying properties
        items.forEach(item => item.updateQuality());
    });
    it('should correctly update quality for multiple days', () => {
        const items = [
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
        // You can access the updateQuality method without specifying properties
        items.forEach(item => item.updateQuality());
    });
    it('should handle an empty item list', () => {
        const items = [];
        const gildedRose = new Shop(items);
        gildedRose.updateQuality();
    });
});
