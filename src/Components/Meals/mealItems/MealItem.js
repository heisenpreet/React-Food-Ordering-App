import { useContext } from "react";
import CartContext from "../../../Store/card-context";
import classes from "./MealItem.module.css";
import MealItmeForm from "./MealsItemForm";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const CartCtx = useContext(CartContext);

  const onAddtoCartHandler = (amount) => {
    CartCtx.addItem({
      name: props.name,
      amount: amount,
      price: props.price,
      id: props.id,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItmeForm onAddtoCart={onAddtoCartHandler} id={props.id} />
      </div>
    </li>
  );
};
export default MealsItem;
