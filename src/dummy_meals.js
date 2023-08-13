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

  {
    id: "m32",
    name: "Mango Lassi",
    description:
      "A refreshing yogurt-based drink made with ripe mangoes, yogurt, and a hint of cardamom.",
    price: 3.99,
    rating: 4.8,
  },
  {
    id: "m33",
    name: "Chicken Korma",
    description:
      "A creamy and mild chicken curry cooked with cashews, almonds, and aromatic spices.",
    price: 13.99,
    rating: 4.6,
  },
  {
    id: "m34",
    name: "Palak Tofu",
    description:
      "Tofu cubes cooked in a flavorful spinach sauce, a vegetarian take on the classic Palak Paneer.",
    price: 10.99,
    rating: 4.3,
  },
  {
    id: "m35",
    name: "Pav Bhaji",
    description:
      "A spicy and flavorful mix of vegetables served with buttered buns, a popular Mumbai street food.",
    price: 8.99,
    rating: 4.7,
  },
  {
    id: "m36",
    name: "Coconut Rice",
    description:
      "Fragrant rice cooked with coconut milk and tempered with curry leaves and mustard seeds.",
    price: 6.99,
    rating: 4.5,
  },
  {
    id: "m37",
    name: "Mango Srikhand",
    description:
      "A sweet and creamy dessert made from strained yogurt and ripe mango pulp, garnished with nuts.",
    price: 5.99,
    rating: 4.9,
  },
  {
    id: "m38",
    name: "Puliyogare",
    description:
      "Tamarind-flavored rice with a mix of spices and peanuts, a popular South Indian dish.",
    price: 9.99,
    rating: 4.4,
  },
  {
    id: "m39",
    name: "Rajasthani Gatte Curry",
    description:
      "Chickpea flour dumplings cooked in a spicy yogurt-based gravy, a traditional Rajasthani dish.",
    price: 12.99,
    rating: 4.6,
  },
  {
    id: "m40",
    name: "Baingan Bharta",
    description:
      "Roasted eggplant mashed and cooked with onions, tomatoes, and aromatic spices.",
    price: 7.99,
    rating: 4.2,
  },
  {
    id: "m41",
    name: "Pomegranate Raita",
    description:
      "A cooling yogurt side dish with pomegranate seeds, mint, and a touch of roasted cumin.",
    price: 4.99,
    rating: 4.7,
  },
  {
    id: "m42",
    name: "Thai Green Curry",
    description:
      "A fragrant and spicy coconut milk-based curry with vegetables and your choice of protein.",
    price: 12.99,
    rating: 4.5,
  },
  {
    id: "m43",
    name: "Sushi Rolls",
    description:
      "Assorted sushi rolls filled with fresh fish, vegetables, and rice, served with soy sauce and wasabi.",
    price: 14.99,
    rating: 4.8,
  },
  {
    id: "m44",
    name: "Mushroom Risotto",
    description:
      "Creamy arborio rice cooked with a medley of mushrooms, white wine, and Parmesan cheese.",
    price: 11.99,
    rating: 4.6,
  },
  {
    id: "m45",
    name: "Greek Salad",
    description:
      "A refreshing salad with tomatoes, cucumbers, red onions, olives, and feta cheese, drizzled with olive oil and oregano.",
    price: 8.99,
    rating: 4.3,
  },
  {
    id: "m46",
    name: "Tandoori Tofu",
    description:
      "Marinated tofu cubes grilled in a clay oven (tandoor) and served with mint chutney.",
    price: 9.99,
    rating: 4.7,
  },
  {
    id: "m47",
    name: "Moroccan Tagine",
    description:
      "Slow-cooked stew with tender meat, vegetables, and aromatic spices, served with couscous.",
    price: 15.99,
    rating: 4.4,
  },
  {
    id: "m48",
    name: "Vietnamese Pho",
    description:
      "A hearty noodle soup with fragrant broth, herbs, and your choice of beef, chicken, or tofu.",
    price: 10.99,
    rating: 4.6,
  },
  {
    id: "m49",
    name: "Peruvian Ceviche",
    description:
      "Fresh seafood marinated in citrus juices, mixed with onions, cilantro, and a touch of spice.",
    price: 13.99,
    rating: 4.2,
  },
  {
    id: "m50",
    name: "Italian Margherita Pizza",
    description:
      "Classic thin-crust pizza topped with tomato sauce, fresh mozzarella, basil leaves, and a drizzle of olive oil.",
    price: 12.99,
    rating: 4.7,
  },
  {
    id: "m51",
    name: "Lebanese Mezze Platter",
    description:
      "An assortment of small dishes including hummus, falafel, tabbouleh, and pita bread, perfect for sharing.",
    price: 16.99,
    rating: 4.5,
  },
];

export default DUMMY_MEALS;
