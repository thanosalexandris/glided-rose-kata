"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SulfurasItem_1 = __importDefault(require("../../../src/modules/item/SulfurasItem"));
describe('Sulfuras Item', () => {
    it('should not change quality or sellIn for Sulfuras items', () => {
        const item = new SulfurasItem_1.default('Sulfuras, Hand of Ragnaros', 0, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(80);
    });
    it('should not change quality or sellIn for Sulfuras items even with negative sellIn', () => {
        const item = new SulfurasItem_1.default('Sulfuras, Hand of Ragnaros', -1, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(80);
    });
});
