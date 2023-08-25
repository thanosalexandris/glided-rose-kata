import BackstagePassesItem from '../../../src/modules/item/BackstagePassesItem';
describe('Backstage Passes Item', () => {
    it('should increase quality by 1 when sellIn > 10', () => {
        const item = new BackstagePassesItem('Backstage Passes', 15, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(14);
        expect(item.quality).toBe(11);
    });
    it('should increase quality by 2 when sellIn <= 10 and > 5', () => {
        const item = new BackstagePassesItem('Backstage Passes', 10, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(12);
    });
    it('should increase quality by 3 when sellIn <= 5 and > 0', () => {
        const item = new BackstagePassesItem('Backstage Passes', 5, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(13);
    });
    it('should drop quality to 0 after the concert', () => {
        const item = new BackstagePassesItem('Backstage Passes', 0, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(0);
    });
    it('should not increase quality above 50', () => {
        const item = new BackstagePassesItem('Backstage Passes', 5, 50);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(50);
    });
});
