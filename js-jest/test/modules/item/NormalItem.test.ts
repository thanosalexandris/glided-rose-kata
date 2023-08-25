import NormalItem from '../../../src/modules/item/NormalItem';

describe('Normal Item', () => {
    it('should decrease quality by 1 and sellIn by 1 for normal items', () => {
        const item = new NormalItem('Normal Item', 5, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(9);
    });

    it('should decrease quality twice as fast when sellIn is negative for normal items', () => {
        const item = new NormalItem('Normal Item', -1, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(8);
    });

    it('should not decrease quality below 0 for normal items', () => {
        const item = new NormalItem('Normal Item', 5, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(0);
    });

    it('should not change quality or sellIn for Legendary items', () => {
        const item = new NormalItem('Sulfuras', 0, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(80);
    });

    it('should decrease quality twice as fast when sellIn is negative for normal items with zero quality', () => {
        const item = new NormalItem('Normal Item', -1, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(0);
    });

    it('should not decrease quality when sellIn is negative but quality is already zero for normal items', () => {
        const item = new NormalItem('Normal Item', -1, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(0);
    });
});
