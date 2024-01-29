// database for store shopping cart

type ItemsObject = {
  itemId: number;
  itemName: string;
  quantity: number;
  price: number;
  description: string;
};

export default function shoppingCart() {
  const itemsArray: ItemsObject[] = [];

  const getItems = () => itemsArray;

  const addItems = (
    itemId: number,
    newItem: string,
    quantity: number,
    price: number,
    description: string
  ) => {
    let itemExist = false;
    itemsArray.forEach((item: ItemsObject) => {
      if (item["itemName"] === newItem) {
        item["itemName"] = item["itemName"] + quantity;
        itemExist = true;
      }
    });
    if (!itemExist) {
      itemsArray.push({
        itemId: itemId,
        itemName: newItem,
        quantity: quantity,
        price: price,
        description: description,
      });
    }
  };

  const removeItems = () => {};

  return { getItems, addItems, removeItems };
}
