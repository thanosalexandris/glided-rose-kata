"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConjuredItem_1 = __importDefault(require("../../../src/modules/item/ConjuredItem"));
describe('Conjured Item', () => {
    it('should decrease quality by 2 and sellIn by 1 for Conjured items', () => {
        const item = new ConjuredItem_1.default('Conjured', 5, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(8);
    });
    it('should decrease quality by 4 when sellIn is negative', () => {
        const item = new ConjuredItem_1.default('Conjured', 0, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(6);
    });
    it('should not decrease quality below 0', () => {
        const item = new ConjuredItem_1.default('Conjured', 5, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(0);
    });
});
