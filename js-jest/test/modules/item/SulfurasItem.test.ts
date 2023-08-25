import SulfurasItem from '../../../src/modules/item/SulfurasItem';

describe('Sulfuras Item', () => {
    it('should not change quality or sellIn for Sulfuras items', () => {
        const item = new SulfurasItem('Sulfuras', 0, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(80);
    });

    it('should not change quality or sellIn for Sulfuras items even with negative sellIn', () => {
        const item = new SulfurasItem('Sulfuras', -1, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(80);
    });
});
