"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../../../src/modules/item/Item"));
describe('Item', () => {
    it('should create an Item', () => {
        const item = new Item_1.default('Some Item', 10, 20);
        expect(item.name).toBe('Some Item');
        expect(item.sellIn).toBe(10);
        expect(item.quality).toBe(20);
    });
});
