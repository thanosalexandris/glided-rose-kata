import ConjuredItem from '../../../src/modules/item/ConjuredItem';

describe('Conjured Item', () => {
    it('should degrade quality by 2 and decrease sellIn by 1 for normal items', () => {
        const item = new ConjuredItem('Conjured Item', 5, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(8);
    });

    it('should degrade quality by 4 when sellIn is negative for normal items', () => {
        const item = new ConjuredItem('Conjured Item', -1, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(6);
    });

    it('should not degrade quality below 0 for normal items', () => {
        const item = new ConjuredItem('Conjured Item', 5, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(0);
    });

    it('should not change quality when quality is already 0 for normal items', () => {
        const item = new ConjuredItem('Conjured Item', 5, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(0);
    });

    it('should degrade quality by 4 when sellIn is negative and quality is greater than 0', () => {
        const item = new ConjuredItem('Conjured Item', -1, 5);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(1);
    });

    it('should not change quality when quality is already 0 and sellIn is negative', () => {
        const item = new ConjuredItem('Conjured Item', -1, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(0);
    });

    it('should not change quality or sellIn for Conjured items with quality 0', () => {
        const item = new ConjuredItem('Conjured Item', 5, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(0);
    });

    it('should not change quality or sellIn for Conjured items with quality 0 and negative sellIn', () => {
        const item = new ConjuredItem('Conjured Item', -1, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(-2);
        expect(item.quality).toBe(0);
    });
});
