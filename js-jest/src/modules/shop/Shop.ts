import UpdateableItem from '../item/contracts/UpdateableItem';

export default class Shop {
    constructor(private items: UpdateableItem[]) {}

    updateQuality() {
        this.items.forEach(item => item.updateQuality());
        return this.items;
    }
}
