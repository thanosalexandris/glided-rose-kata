import AgedBrieItem from '../../../src/modules/item/AgedBrieItem';

describe('Aged Brie Item', () => {
    it('should increase quality by 1 and decrease sellIn by 1 for Aged Brie', () => {
        const item = new AgedBrieItem('Aged Brie', 5, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(11);
    });

    it('should not increase quality above 50', () => {
        const item = new AgedBrieItem('Aged Brie', 5, 50);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(50);
    });

    it('should increase quality by 2 when sellIn is negative', () => {
        const item = new AgedBrieItem('Aged Brie', 0, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(12);
    });
});
