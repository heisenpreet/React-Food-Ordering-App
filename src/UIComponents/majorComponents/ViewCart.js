import Modal from "./Modal";
import { useContext, useState, useRef, useEffect } from "react";
import CartContext from "../../Store/card-context";
import React from "react";
import CrossBtn from "../minorComponents/CrossBtn";
import AddBtn from "../minorComponents/AddBtn";
const ViewCart = (props) => {
  const CartCtx = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const reff = useRef({});
  reff.current = orderPlaced;

  useEffect(() => {
    if (localStorage.getItem("ORDER") === "1") {
      setOrderPlaced(true);
    }
  }, []);

  const orderPlaceHandler = () => {
    setOrderPlaced(true);
    localStorage.setItem("ORDER", "1");
  };

  const ListItems = React.memo(
    (props) => {
      return (
        <tr>
          <th>{props.index + 1}</th>
          <td>{props.item.name}</td>
          <td>{props.item.price}</td>
          <td>{props.item.amount}</td>
          <td>{<CrossBtn onRemove={props.onRemove} />}</td>
          {/* <td>{<AddBtn onRemove={props.onRemove} />}</td> */}
        </tr>
      );
    },
    function areEqual(prevState, currState) {
      if (prevState !== currState) {
        return false;
      }
      return true;
    }
  );
  const OrderCard = (props) => {
    return (
      <div className="stats bg-primary text-primary-content w-full mt-3">
        <div className="stat">
          <div className="stat-title">Total</div>
          <div className="stat-value">${CartCtx.totalAmount.toFixed(2)}</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add Coupons</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Discounted Price</div>
          <div className="stat-value">
            ${(CartCtx.totalAmount - CartCtx.totalAmount / 10).toFixed(2)}
          </div>
          <div className="stat-actions">
            {!reff.current && (
              <button onClick={orderPlaceHandler} className="btn btn-sm">
                Place Order
              </button>
            )}
            {reff.current && (
              <button className="btn btn-sm bg-success text-primary-content">
                Order Placed
              </button>
            )}
            <button className="btn btn-sm ml-2" onClick={props.oncloseOverlay}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal oncloseOverlay={props.oncloseOverlay}>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Remove Item</th>
              {/* <th>Add Item</th> */}
            </tr>
          </thead>
          <tbody>
            {CartCtx.items.map((item, index) => (
              <ListItems
                key={index}
                item={item}
                index={index}
                onRemove={CartCtx.removeItem.bind(null, item.id)} //here we don't wnna call the removeItem fX , but we want to pass arguments to the fx , thus we cant do like removeItem(item:id), this will call the fx , thus we use the bind fx to pass the arguments
              />
            ))}
          </tbody>
        </table>
        <OrderCard oncloseOverlay={props.oncloseOverlay} />
      </div>
    </Modal>
  );
};

export default ViewCart;
