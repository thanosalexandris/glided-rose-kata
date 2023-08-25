import Shop from "../src/modules/shop/Shop";
import Item from "./modules/item/Item";

describe("Gilded Rose", function () {
  it("should decrease the quality twice as fast when sellIn is negative for normal items", function () {
    const gildedRose = new Shop([new Item("Normal Item", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(18);
  });

  it("should not change quality or sellIn for Legendary items", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    for (const item of items) {
      expect(item.quality).toBe(80);
      expect(item.sellIn).toBe(0);
    }
  });

  it("should handle items with minimum quality (0)", function () {
    const gildedRose = new Shop([new Item("Normal Item", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should handle items with maximum quality (50)", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(50);
  });

  it("should handle items with minimum sellIn (0)", function () {
    const gildedRose = new Shop([new Item("Normal Item", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(18);
  });
});

