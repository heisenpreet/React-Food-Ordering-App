import { useContext } from "react";
import Theme from "../../Store/themeContext";

import { FaSun, FaMoon } from "react-icons/fa";

const ThemeBtn = (props) => {
  const theme = useContext(Theme);
  return (
    <>
      <button
        onClick={theme.dispatchTheme}
        className="btn btn-circle btn-outline transition-all duration-300 tooltip  flex justify-center items-center "
        data-tip="Change Theme"
      >
        {!theme.theme.icon && (
          <FaSun className=" text-2xl transition-all duration-200" />
        )}
        {theme.theme.icon && (
          <FaMoon className=" text-2xl transition-all duration-200" />
        )}
      </button>
    </>
  );
};
export default ThemeBtn;
