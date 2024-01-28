// database for store shopping cart

type ItemsObject = {
  itemName: string;
  quantity: number;
};

export default function shoppingCart() {
  const itemsArray: ItemsObject[] = [];

  const getItems = () => itemsArray;

  const addItems = (newItem: string, quantity: number) => {
    let itemExist = false;
    itemsArray.forEach((item: ItemsObject) => {
      if (item["itemName"] === newItem) {
        item["itemName"] = item["itemName"] + quantity;
        itemExist = true;
      }
    });
    if (!itemExist) {
      itemsArray.push({ itemName: newItem, quantity: quantity });
    }
  };
  return { getItems, addItems };
}
