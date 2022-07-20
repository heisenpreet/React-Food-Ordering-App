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
      <header data-theme="lemonade">
        <Navbar viewCartHandler={viewCartHandler} />
        {viewCartValid && <ViewCart oncloseOverlay={closeOverlayHandler} />}
      </header>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Delicious Food, Delivered To You
            </h1>

            <p className="mb-5">
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p className="mb-5">
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
