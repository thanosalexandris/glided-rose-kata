"use strict";
// src/modules/item/AgedBrieItem.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class AgedBrieItem extends Item_1.default {
    updateQuality() {
        super.updateQuality();
        if (this.quality < 50) {
            this.quality += 1;
            if (this.sellIn < 0 && this.quality < 50) {
                this.quality += 1;
            }
        }
    }
}
exports.default = AgedBrieItem;
