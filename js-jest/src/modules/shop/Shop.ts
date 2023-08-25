import { UpdateableItem } from "../item/contracts/UpdateableItem";

export default class Shop {
    items: UpdateableItem[];
    constructor(items: UpdateableItem[]) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach((item) => item.updateQuality());
        return this.items;
    }
}
