import React from "react";
import { useRef, useMemo, useState } from "react";
const Checkoutform = (props) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const [btnDisable, setBtnDisable] = useState(true);
  const [inValidNo, setInValidNo] = useState(false);
  const [inValidName, setInValidName] = useState(false);
  const [inValidaddress, setInValidaddress] = useState(false);

  let debounceTimer = useMemo(() => false, []);
  const onChangeHandler = () => {
    if (
      nameRef.current.value.length > 2 &&
      addressRef.current.value.length > 5 &&
      phoneRef.current.value.length === 10
    ) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  return (
    <form className="my-4 flex flex-wrap gap-2">
      <div
        class={` ${inValidName ? "tooltip tooltip-error tooltip-open" : " "} `}
        data-tip="Invalid Name"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered max-w-xs"
          ref={nameRef}
          onFocus={() => {
            setInValidName(false);
          }}
          onBlur={() => {
            if (nameRef.current.value.length <= 2) {
              setInValidName(true);
            } else {
              setInValidName(false);
            }
          }}
          onChange={() => {
            if (debounceTimer) {
              clearTimeout(debounceTimer);
            }
            debounceTimer = setTimeout(() => {
              onChangeHandler();
            }, 600);
          }}
        />
      </div>
      <div
        class={` ${
          inValidaddress ? "tooltip tooltip-error tooltip-open" : " "
        } `}
        data-tip="Invalid Address"
      >
        <input
          type="text"
          placeholder="Your Address"
          className="input input-bordered max-w-xs"
          ref={addressRef}
          onFocus={() => {
            setInValidaddress(false);
          }}
          onBlur={() => {
            if (addressRef.current.value.length < 5) {
              setInValidaddress(true);
            } else {
              setInValidaddress(false);
            }
          }}
          onChange={() => {
            if (debounceTimer) {
              clearTimeout(debounceTimer);
            }
            debounceTimer = setTimeout(() => {
              onChangeHandler();
            }, 600);
          }}
        />
      </div>
      <div
        class={` ${inValidNo ? "tooltip tooltip-error tooltip-open" : " "} `}
        data-tip="Invalid No. (10 digits)"
      >
        <input
          type="number"
          placeholder="Mobile Number"
          className="input input-bordered max-w-xs "
          ref={phoneRef}
          onChange={() => {
            if (debounceTimer) {
              clearTimeout(debounceTimer);
            }
            debounceTimer = setTimeout(() => {
              onChangeHandler();
            }, 600);
          }}
          onFocus={() => {
            setInValidNo(false);
          }}
          onBlur={() => {
            if (phoneRef.current.value.length !== 10) {
              setInValidNo(true);
            } else {
              setInValidNo(false);
            }
          }}
        />
      </div>

      <input
        disabled={btnDisable}
        type="submit"
        value="Order"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          props.onSubmitHandler({
            name: nameRef.current.value,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
          });
        }}
      />
      <input type="reset" value="Reset" className="btn" />
    </form>
  );
};
export default React.memo(Checkoutform);
