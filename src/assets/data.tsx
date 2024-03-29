// database for store shopping cart

export type ItemsObject = {
  itemId: number;
  itemName: string;
  quantity: number;
  price: number;
  itemImage: string;
  [key: string]: unknown;
};

export type shoppingCartDataObject = {
  getItems: () => ItemsObject[];
  addItems: (
    itemId: number,
    itemName: string,
    quantity: number,
    price: number,
    itemImage: string
  ) => unknown;
  removeItems: (itemId: number) => unknown;
  adjustQuantity: (itemId: number, arg0: number) => unknown;
  totalPrice: () => number;
  totalItems: () => number;
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
    const index = itemsArray.findIndex((item) => item.itemId === itemId);
    if (index !== -1 && itemsArray[index].quantity > 0) {
      itemsArray[index].quantity += newQuantity;
    }
    if (itemsArray[index].quantity === 0) removeItems(itemId);
  };

  const totalPrice = () => {
    let sum = 0;

    itemsArray.forEach((item) => {
      sum += item.quantity * item.price;
    });

    return sum;
  };

  const totalItems = () => itemsArray.length;

  return {
    getItems,
    addItems,
    removeItems,
    adjustQuantity,
    totalPrice,
    totalItems,
  };
})();

export default shoppingCartData;
