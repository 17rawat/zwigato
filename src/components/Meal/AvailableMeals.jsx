import React from "react";
import { Card } from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m5",
    name: "Butter Chicken",
    description:
      "A rich and creamy tomato-based curry with tender pieces of chicken, best enjoyed with naan or rice.",
    price: 12.99,
  },
  {
    id: "m6",
    name: "Paneer Tikka",
    description:
      "Marinated cubes of paneer (Indian cottage cheese) grilled to perfection, served with mint chutney.",
    price: 9.99,
  },
  {
    id: "m7",
    name: "Rogan Josh",
    description:
      "A flavorful and aromatic lamb curry made with a blend of spices and slow-cooked to perfection.",
    price: 14.99,
  },
  {
    id: "m8",
    name: "Masala Dosa",
    description:
      "A thin and crispy rice crepe filled with a spicy potato mixture, served with coconut chutney and sambar.",
    price: 8.99,
  },
  {
    id: "m9",
    name: "Uttapam",
    description:
      "A thick savory pancake made with a variety of toppings like onions, tomatoes, and green chilies, cooked to perfection.",
    price: 7.99,
  },
  {
    id: "m10",
    name: "Chettinad Chicken Curry",
    description:
      "A spicy and aromatic chicken curry made with traditional Chettinad spices and flavors.",
    price: 13.99,
  },
  {
    id: "m11",
    name: "Fish Curry with Mustard Sauce (Macher Jhol)",
    description:
      "A light and flavorful fish curry cooked in a mustard-based sauce, a staple in Bengali cuisine.",
    price: 11.99,
  },
  {
    id: "m12",
    name: "Shorshe Ilish",
    description:
      "Hilsa fish marinated and cooked in a tangy mustard sauce, a classic Bengali delicacy.",
    price: 15.99,
  },
  {
    id: "m13",
    name: "Mishti Doi",
    description:
      "A sweet and creamy yogurt dessert, popular in Bengal, made with caramelized sugar.",
    price: 5.99,
  },
  {
    id: "m14",
    name: "Sarson da Saag with Makki di Roti",
    description:
      "A traditional Punjabi dish made with mustard greens, served with cornmeal flatbread.",
    price: 10.99,
  },
  {
    id: "m15",
    name: "Chole Bhature",
    description:
      "Spiced chickpea curry served with deep-fried bread (bhature), a hearty and filling dish.",
    price: 9.99,
  },
  {
    id: "m16",
    name: "Amritsari Kulcha",
    description:
      "Stuffed bread filled with a variety of fillings like potato or paneer, a popular street food.",
    price: 6.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
