"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NormalItem_1 = __importDefault(require("../../../src/modules/item/NormalItem"));
describe('Normal Item', () => {
    it('should decrease the quality twice as fast when sellIn is negative', () => {
        const item = new NormalItem_1.default('Normal Item', 0, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(18);
    });
    it('should not change quality or sellIn for Legendary items', () => {
        const item = new NormalItem_1.default('Sulfuras, Hand of Ragnaros', 0, 80);
        item.updateQuality();
        expect(item.sellIn).toBe(0);
        expect(item.quality).toBe(80);
    });
    it('should decrease quality by 1 and sellIn by 1 for normal items', () => {
        const item = new NormalItem_1.default('Normal Item', 5, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(9);
    });
    it('should decrease quality by 2 when sellIn is negative for normal items', () => {
        const item = new NormalItem_1.default('Normal Item', 0, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(8);
    });
    it('should not decrease quality below 0 for normal items', () => {
        const item = new NormalItem_1.default('Normal Item', 5, 0);
        item.updateQuality();
        expect(item.sellIn).toBe(4);
        expect(item.quality).toBe(0);
    });
    it('should decrease quality twice as fast when sellIn is 0 for normal items', () => {
        const item = new NormalItem_1.default('Normal Item', 0, 10);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(8);
    });
});
