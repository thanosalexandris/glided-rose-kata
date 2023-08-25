"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class BackstagePassItem extends Item_1.default {
    updateQuality() {
        if (this.quality < 50) {
            this.quality += 1;
            if (this.sellIn < 11 && this.quality < 50) {
                this.quality += 1;
            }
            if (this.sellIn < 6 && this.quality < 50) {
                this.quality += 1;
            }
        }
        this.sellIn -= 1;
        if (this.sellIn < 0) {
            this.quality = 0;
        }
    }
}
exports.default = BackstagePassItem;