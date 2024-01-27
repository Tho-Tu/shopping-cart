// database for store shopping cart

type ItemsObject = {
  [key: string]: number;
};

export default function shoppingCart() {
  const itemsObject: ItemsObject = {};

  const getItems = () => itemsObject;

  const addItems = (item: string, quantity: number) => {
    if (itemsObject[item] !== undefined) {
      itemsObject[item] = itemsObject[item] + quantity;
    } else {
      itemsObject[item] = quantity;
    }
  };

  return { getItems, addItems };
}
