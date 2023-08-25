"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class SulfurasItem extends Item_1.default {
    updateQuality() {
        // Sulfuras items never change in quality or sellIn
    }
}
exports.default = SulfurasItem;
