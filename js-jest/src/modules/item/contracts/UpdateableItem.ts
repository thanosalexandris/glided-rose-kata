export default interface UpdateableItem {
    updateQuality(): void;
    name: string;
    sellIn: number;
    quality: number;
}