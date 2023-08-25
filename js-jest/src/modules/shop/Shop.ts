import Item from '../item/Item';
class Shop {
    constructor(private items: Item[] = []) {}

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateQuality();
        }
        return this.items;
    }
}

export default Shop;
