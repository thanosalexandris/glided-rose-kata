"use strict";
// src/modules/item/SulfurasItem.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class SulfurasItem extends Item_1.default {
    updateQuality() {
        // Sulfuras quality never changes.
    }
}
exports.default = SulfurasItem;
