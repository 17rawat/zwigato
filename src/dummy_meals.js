const DUMMY_MEALS = [
  {
    id: "m5",
    name: "Butter Chicken",
    description:
      "A rich and creamy tomato-based curry with tender pieces of chicken, best enjoyed with naan or rice.",
    price: 12.99,
    rating: 4.5,
  },
  {
    id: "m6",
    name: "Paneer Tikka",
    description:
      "Marinated cubes of paneer (Indian cottage cheese) grilled to perfection, served with mint chutney.",
    price: 9.99,
    rating: 4.8,
  },
  {
    id: "m7",
    name: "Rogan Josh",
    description:
      "A flavorful and aromatic lamb curry made with a blend of spices and slow-cooked to perfection.",
    price: 14.99,
    rating: 4.2,
  },
  {
    id: "m8",
    name: "Masala Dosa",
    description:
      "A thin and crispy rice crepe filled with a spicy potato mixture, served with coconut chutney and sambar.",
    price: 8.99,
    rating: 4.7,
  },
  {
    id: "m9",
    name: "Uttapam",
    description:
      "A thick savory pancake made with a variety of toppings like onions, tomatoes, and green chilies, cooked to perfection.",
    price: 7.99,
    rating: 4.3,
  },
  {
    id: "m10",
    name: "Chettinad Chicken Curry",
    description:
      "A spicy and aromatic chicken curry made with traditional Chettinad spices and flavors.",
    price: 13.99,
    rating: 4.6,
  },
  {
    id: "m11",
    name: "Fish Curry with Mustard Sauce (Macher Jhol)",
    description:
      "A light and flavorful fish curry cooked in a mustard-based sauce, a staple in Bengali cuisine.",
    price: 11.99,
    rating: 4.0,
  },
  {
    id: "m12",
    name: "Shorshe Ilish",
    description:
      "Hilsa fish marinated and cooked in a tangy mustard sauce, a classic Bengali delicacy.",
    price: 15.99,
    rating: 4.8,
  },
  {
    id: "m13",
    name: "Mishti Doi",
    description:
      "A sweet and creamy yogurt dessert, popular in Bengal, made with caramelized sugar.",
    price: 5.99,
    rating: 4.9,
  },
  {
    id: "m14",
    name: "Sarson da Saag with Makki di Roti",
    description:
      "A traditional Punjabi dish made with mustard greens, served with cornmeal flatbread.",
    price: 10.99,
    rating: 4.4,
  },
  {
    id: "m15",
    name: "Chole Bhature",
    description:
      "Spiced chickpea curry served with deep-fried bread (bhature), a hearty and filling dish.",
    price: 9.99,
    rating: 4.6,
  },
  {
    id: "m16",
    name: "Amritsari Kulcha",
    description:
      "Stuffed bread filled with a variety of fillings like potato or paneer, a popular street food.",
    price: 6.99,
    rating: 4.2,
  },
  {
    id: "m17",
    name: "Pani Puri",
    description:
      "A popular street food consisting of hollow balls filled with spicy tamarind water, chickpeas, potatoes, and chutneys.",
    price: 4.99,
    rating: 4.7,
  },
  {
    id: "m18",
    name: "Vada Pav",
    description:
      "A Maharashtrian fast food consisting of a spicy potato fritter served in a bun, usually accompanied by chutneys.",
    price: 3.99,
    rating: 4.5,
  },
  {
    id: "m19",
    name: "Hyderabadi Biryani",
    description:
      "A fragrant rice dish cooked with flavorful spices and either chicken, mutton, or vegetables, originating from Hyderabad.",
    price: 15.99,
    rating: 4.9,
  },
  {
    id: "m20",
    name: "Rajma Chawal",
    description:
      "A North Indian comfort food featuring red kidney beans cooked in a rich tomato gravy, served with rice.",
    price: 8.99,
    rating: 4.3,
  },
  {
    id: "m21",
    name: "Gulab Jamun",
    description:
      "Deep-fried milk solids soaked in sugar syrup, a beloved Indian dessert often served on special occasions.",
    price: 6.99,
    rating: 4.8,
  },
  {
    id: "m22",
    name: "Malai Kofta",
    description:
      "Vegetable dumplings served in a creamy tomato-based gravy, a classic main dish in Indian cuisine.",
    price: 11.99,
    rating: 4.6,
  },
  {
    id: "m23",
    name: "Dahi Puri",
    description:
      "Similar to Pani Puri, but with a yogurt-based filling, offering a delightful combination of flavors and textures.",
    price: 5.99,
    rating: 4.2,
  },
  {
    id: "m24",
    name: "Mutton Korma",
    description:
      "A rich and flavorful curry made with tender pieces of mutton and a blend of aromatic spices.",
    price: 14.99,
    rating: 4.4,
  },
  {
    id: "m25",
    name: "Aloo Paratha",
    description:
      "Whole wheat flatbread stuffed with spiced mashed potatoes, often enjoyed with yogurt and pickles.",
    price: 7.99,
    rating: 4.5,
  },
  {
    id: "m26",
    name: "Rasmalai",
    description:
      "Soft cottage cheese dumplings soaked in sweetened milk, garnished with saffron and nuts.",
    price: 5.99,
    rating: 4.7,
  },

  {
    id: "m27",
    name: "Dhokla",
    description:
      "A steamed snack made from fermented rice and chickpea flour, often served with chutney.",
    price: 6.99,
    rating: 4.1,
  },
  {
    id: "m28",
    name: "Mysore Masala Dosa",
    description:
      "A spicier version of the traditional masala dosa, with a flavorful red chutney spread inside the dosa.",
    price: 9.99,
    rating: 4.6,
  },
  {
    id: "m29",
    name: "Khandvi",
    description:
      "A savory snack made from gram flour, rolled into thin layers and garnished with mustard and coconut.",
    price: 5.99,
    rating: 4.4,
  },
  {
    id: "m30",
    name: "Undhiyu",
    description:
      "A mixed vegetable curry cooked with a blend of spices and served with puris and shrikhand.",
    price: 11.99,
    rating: 4.7,
  },
  {
    id: "m31",
    name: "Thepla",
    description:
      "Soft flatbreads made from whole wheat flour and spices, often enjoyed with yogurt and pickles.",
    price: 4.99,
    rating: 4.5,
  },
];

export default DUMMY_MEALS;
