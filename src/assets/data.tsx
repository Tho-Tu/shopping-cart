// database for store shopping cart

export type ItemsObject = {
  itemId: number;
  itemName: string;
  quantity: number;
  price: number;
  [key: string]: unknown;
};

const shoppingCartData = (() => {
  const itemsArray: ItemsObject[] = [];

  const getItems = () => [...itemsArray];

  const addItems = (
    itemId: number,
    itemName: string,
    quantity: number,
    price: number
  ) => {
    const newItem = {
      itemId: itemId,
      itemName: itemName,
      quantity: quantity,
      price: price,
    };

    let itemExist = false;

    itemsArray.forEach((item: ItemsObject) => {
      if (item['itemId'] === itemId) {
        item['quantity'] += quantity;
        itemExist = true;
        return;
      }
    });
    if (!itemExist) {
      itemsArray.push(newItem);
    }
  };

  const removeItems = (itemId: number) => {
    itemsArray.splice(itemId, 1);
  };

  const adjustQuantity = (itemId: number, newQuantity: number) => {
    itemsArray[itemId].quantity += newQuantity;
  };

  return { getItems, addItems, removeItems, adjustQuantity };
})();

export default shoppingCartData;
