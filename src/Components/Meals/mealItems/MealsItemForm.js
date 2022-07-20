import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItmeForm = (props) => {
  const inputRef = useRef();
  const [amountIsValid, setamountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredItemAmount = Number(inputRef.current.value);

    if (enteredItemAmount < 1 || enteredItemAmount > 5) {
      setamountIsValid(false);
      return;
    }

    props.onAddtoCart(enteredItemAmount);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="absolute right-3 bottom-12">
          <Input
            ref={inputRef}
            label="Amount"
            input={{
              id: "amount" + props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
        </div>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        <button className="btn btn-primary w-full">+ADD</button>
      </form>
    </>
  );
};
export default MealItmeForm;
