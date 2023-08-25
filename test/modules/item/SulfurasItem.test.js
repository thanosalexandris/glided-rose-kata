import SulfurasItem from '../../../src/modules/item/SulfurasItem';
describe('Sulfuras Item', () => {
    it('should not change quality or sellIn for Sulfuras items with positive sellIn', () => {
        const item = new SulfurasItem('Sulfuras', 5, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(5);
        expect(item.quality).toBe(80);
    });
    it('should not change quality or sellIn for Sulfuras items with negative sellIn', () => {
        const item = new SulfurasItem('Sulfuras', -1, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(80);
    });
    it('should not change quality or sellIn for Sulfuras items with zero quality', () => {
        const item = new SulfurasItem('Sulfuras', 0, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(0);
    });
    it('should not change quality or sellIn for Sulfuras items with maximum quality (50)', () => {
        const item = new SulfurasItem('Sulfuras', 10, 50);
        item.updateQuality();
        expect(item.sellIn).toBe(10);
        expect(item.quality).toBe(50);
    });
});
