import CartContext from "./card-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 67,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const itemAlreadyExistsIndex = prevState.items.findIndex(
      (element) => element.id === action.item.id
    );
    const itemAlreadyExists = prevState.items[itemAlreadyExistsIndex];

    let updateditems;

    if (itemAlreadyExists) {
      const updateditem = {
        ...itemAlreadyExists,
        amount: itemAlreadyExists.amount + action.item.amount,
      };
      updateditems = [...prevState.items];
      updateditems[itemAlreadyExistsIndex] = updateditem;
    } else {
      updateditems = [...prevState.items, action.item];
    }

    return {
      items: updateditems,
      totalAmount:
        prevState.totalAmount + action.item.price * action.item.amount,
    };
  }
  if (action.type === "REMOVE") {
    const remainingItems = prevState.items.filter(
      (element) => element.id !== action.id
    );

    return {
      items: remainingItems,
      totalAmount: remainingItems.reduce((acc, element) => {
        return (acc += element.price * element.amount);
      }, 0),
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    localStorage.removeItem("ORDER");
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
