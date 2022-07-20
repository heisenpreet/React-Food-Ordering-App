import GlobalStyles from "./UIComponents/GlobalStyles";
import { Suspense } from "react";
import LoadingSpinner from "./UIComponents/minorComponents/LoadingSpinner";
import ActionBar from "./UIComponents/majorComponents/ActionBar";
import { useContext } from "react";
import Theme from "./Store/themeContext";
import Header from "./Components/Layout/Header";
import CartProvider from "./Store/CardProvider";
import AvailableMeals from "./Components/Meals/AvilableMeals";

function App() {
  const theme = useContext(Theme);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <GlobalStyles />
      <div data-theme={theme.theme.themeName}>
        <ActionBar />
        <CartProvider>
          <Header />
          <main>
            <AvailableMeals />
          </main>
        </CartProvider>
      </div>
    </Suspense>
  );
}

export default App;
