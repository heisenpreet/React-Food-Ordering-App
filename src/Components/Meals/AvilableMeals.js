import classes from "./AvailableMeals.module.css";
import MealsItem from "./mealItems/MealItem";
import LoadingSpinner from "../../UIComponents/minorComponents/LoadingSpinner";
import { useCallback, useEffect, useState } from "react";
import Alert from "../../UIComponents/minorComponents/Alert";
const AvailableMeals = () => {
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);
  const [httpError, setHttpError] = useState(false);
  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(
        "https://httppractice-86b7f-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const data = await response.json();
      const allMeals = Object.entries(data).map((meal) => {
        return {
          id: meal[0],
          ...meal[1],
        };
      }); //CHANGING AN FECTH OBJECT INTO AN ARRAY //IMPORTANT
      setDUMMY_MEALS(allMeals);
    } catch (error) {
      console.log(error);
      setHttpError(true);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const mealsList =
    DUMMY_MEALS.length === 0 ? (
      <LoadingSpinner />
    ) : (
      DUMMY_MEALS.map((meals) => (
        <MealsItem
          id={meals.id}
          key={meals.id}
          name={meals.name}
          description={meals.description}
          price={meals.price}
          imgURL={meals.imgURL}
        ></MealsItem>
      ))
    );

  return (
    <section className={classes.meals}>
      <div
        data-theme="lemonade"
        className={`w-10/12 content-center items-center justify-items-center my-0 mx-auto ${
          DUMMY_MEALS.length === 0 || httpError
            ? " "
            : "grid md:grid-cols-2 grid-cols-1 grid-flow-rows gap-6"
        }`}
      >
        {!httpError && mealsList}
        {httpError && <Alert alert="-error" msg="Something Went Wrong" />}
      </div>
    </section>
  );
};
export default AvailableMeals;
