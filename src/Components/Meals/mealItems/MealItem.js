import { useContext } from "react";
import CartContext from "../../../Store/card-context";

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
    <div className="card  bg-base-100 shadow-xl w-90">
      <figure>
        <img src={`${props.imgURL}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          <div className="badge badge-secondary">{price}</div>
        </h2>
        <p>{props.description}</p>
      </div>

      <MealItmeForm onAddtoCart={onAddtoCartHandler} id={props.id} />
    </div>
  );
};
export default MealsItem;
