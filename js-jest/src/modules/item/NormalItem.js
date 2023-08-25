"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class NormalItem extends Item_1.default {
    updateQuality() {
        if (this.quality > 0) {
            this.quality -= 1;
        }
        this.sellIn -= 1;
        if (this.sellIn < 0 && this.quality > 0) {
            this.quality -= 1;
        }
    }
}
exports.default = NormalItem;
