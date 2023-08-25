import AgedBrieItem from '../../../src/modules/item/AgedBrieItem';
describe('AgedBrieItem', () => {
    let item;
    beforeEach(() => {
        item = new AgedBrieItem('Aged Brie', 5, 10);
    });
    it('should increase quality and decrease sellIn', () => {
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(11);
    });
    it('should increase quality twice as fast when sellIn is negative', () => {
        item.sellIn = 0;
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(12);
    });
    it('should not increase quality when quality is already 50', () => {
        item.quality = 50;
        item.sellIn = -10;
        item.updateQuality();
        expect(item.quality).toBe(50);
        expect(item.sellIn).toBe(-11);
    });
    it('should increase quality when quality is less than 50', () => {
        item.quality = 49; // Test when quality is less than 50
        item.updateQuality();
        expect(item.quality).toBe(50);
    });
    it('should not increase quality when quality is already 50 (negative sellIn)', () => {
        item.quality = 50;
        item.sellIn = 0; // Test with negative sellIn
        item.updateQuality();
        expect(item.quality).toBe(50);
    });
    it('should not increase quality when quality is equal to 50 (negative sellIn)', () => {
        item.quality = 50;
        item.sellIn = -1; // Test with negative sellIn
        item.updateQuality();
        expect(item.quality).toBe(50);
    });
});
