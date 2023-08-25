import Item from './modules/item/Item';
import NormalItem from './modules/item/NormalItem';
import AgedBrieItem from './modules/item/AgedBrieItem';
import BackstagePassesItem from './modules/item/BackstagePassesItem';
import SulfurasItem from './modules/item/SulfurasItem';
import ConjuredItem from './modules/item/ConjuredItem';

class Shop {
    constructor(private items: Item[] = []) {
    }

    updateQuality() {
        for (const item of this.items) {
            item.updateQuality();
        }
        return this.items;
    }
}

export {Shop, Item, NormalItem, AgedBrieItem, BackstagePassesItem, SulfurasItem, ConjuredItem};
