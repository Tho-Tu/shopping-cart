// database for store shopping cart

export type ItemsObject = {
  itemId: number;
  itemName: string;
  quantity: number;
  price: number;
  itemImage: string;
  [key: string]: unknown;
};

const shoppingCartData = (() => {
  const itemsArray: ItemsObject[] = [];

  const getItems = () => [...itemsArray];

  const addItems = (
    itemId: number,
    itemName: string,
    quantity: number,
    price: number,
    itemImage: string
  ) => {
    const newItem = {
      itemId: itemId,
      itemName: itemName,
      quantity: quantity,
      price: price,
      itemImage: itemImage,
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
    const index = itemsArray.findIndex((item) => item.itemId === itemId);
    if (index !== -1) {
      itemsArray.splice(index, 1);
    }
  };

  const adjustQuantity = (itemId: number, newQuantity: number) => {
    itemsArray[itemId].quantity += newQuantity;
  };

  const totalPrice = () => {
    let sum = 0;

    itemsArray.forEach((item) => {
      sum += item.quantity * item.price;
    });

    return sum;
  };

  return { getItems, addItems, removeItems, adjustQuantity, totalPrice };
})();

export default shoppingCartData;
