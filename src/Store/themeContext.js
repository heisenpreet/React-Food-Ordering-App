import React from "react";
import { useReducer } from "react";
const Theme = React.createContext({
  themeName: "corporate",
  icon: true,
});
const themeFx = (prevState) => {
  if (prevState.themeName === "corporate") {
    return {
      themeName: "black",
      icon: false,
    };
  }
  if (prevState.themeName === "black") {
    return {
      themeName: "corporate",
      icon: true,
    };
  }
};
export const ThemeContextProvider = (props) => {
  const [theme, dispatchTheme] = useReducer(themeFx, {
    themeName: "corporate",
    icon: true,
  });
  return (
    <Theme.Provider
      value={{
        theme: theme,
        dispatchTheme: dispatchTheme,
      }}
    >
      {props.children}
    </Theme.Provider>
  );
};

export default Theme;
