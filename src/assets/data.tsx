// database for store shopping cart

export type ItemsObject = {
  itemIndex: number;
  itemName: string;
  quantity: number;
  price: number;
  [key: string]: unknown;
};

export default function shoppingCartData() {
  const itemsArray: ItemsObject[] = [];

  const getItems = () => itemsArray;

  const addItems = (
    itemIndex: number,
    newItem: string,
    quantity: number,
    price: number
  ) => {
    let itemExist = false;
    itemsArray.forEach((item: ItemsObject) => {
      if (item['itemName'] == newItem) {
        item['quantity'] + quantity;
        itemExist = true;
      }
    });
    if (!itemExist) {
      itemsArray.push({
        itemIndex: itemIndex,
        itemName: newItem,
        quantity: quantity,
        price: price,
      });
    }
  };

  // relies on UI
  const removeItems = (itemIndex: number) => {
    itemsArray.splice(itemIndex, 1);
  };

  const adjustQuantity = (itemIndex: number, newQuantity: number) => {
    itemsArray[itemIndex].quantity += newQuantity;
  };

  return { getItems, addItems, removeItems, adjustQuantity };
}
