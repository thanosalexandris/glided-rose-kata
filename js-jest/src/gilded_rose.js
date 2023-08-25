"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConjuredItem = exports.SulfurasItem = exports.BackstagePassesItem = exports.AgedBrieItem = exports.NormalItem = exports.Item = exports.Shop = void 0;
const Item_1 = __importDefault(require("./modules/item/Item"));
exports.Item = Item_1.default;
const NormalItem_1 = __importDefault(require("./modules/item/NormalItem"));
exports.NormalItem = NormalItem_1.default;
const AgedBrieItem_1 = __importDefault(require("./modules/item/AgedBrieItem"));
exports.AgedBrieItem = AgedBrieItem_1.default;
const BackstagePassesItem_1 = __importDefault(require("./modules/item/BackstagePassesItem"));
exports.BackstagePassesItem = BackstagePassesItem_1.default;
const SulfurasItem_1 = __importDefault(require("./modules/item/SulfurasItem"));
exports.SulfurasItem = SulfurasItem_1.default;
const ConjuredItem_1 = __importDefault(require("./modules/item/ConjuredItem"));
exports.ConjuredItem = ConjuredItem_1.default;
class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        for (const item of this.items) {
            item.updateQuality();
        }
        return this.items;
    }
}
exports.Shop = Shop;
