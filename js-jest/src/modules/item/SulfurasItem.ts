import Item from './Item';
import UpdateableItem from './contracts/UpdateableItem';

export default class SulfurasItem extends Item implements UpdateableItem {
    updateQuality() {
        // Sulfuras items never change in quality or sellIn
    }
}
