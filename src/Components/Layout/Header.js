import classes from "./Header.module.css";
import Navbar from "../../UIComponents/majorComponents/Navbar";
import { useState } from "react";
import ViewCart from "../../UIComponents/majorComponents/ViewCart";
const Header = (props) => {
  const [viewCartValid, setviewCartValid] = useState(false);
  const viewCartHandler = (event) => {
    event.preventDefault();
    setviewCartValid(true);
  };

  const closeOverlayHandler = () => {
    setviewCartValid(false);
  };
  return (
    <>
      <header>
        <Navbar viewCartHandler={viewCartHandler} />
        {viewCartValid && <ViewCart oncloseOverlay={closeOverlayHandler} />}
      </header>
      <div className={classes["main-image"]}>
        <img
          src=" https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="A table full of delicious food"
        />
      </div>
    </>
  );
};

export default Header;
