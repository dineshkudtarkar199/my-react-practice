const dishes = [
  { name: "Gulab Jamun", price: 60, desc: "Soft milk-solid balls soaked in sugar syrup", type: "sweets", image: "/dishimages/sweet1.jpg", category: "veg" },
  { name: "Jalebi", price: 50, desc: "Crispy deep-fried spirals soaked in syrup", type: "sweets", image: "/dishimages/sweet2.jpg", category: "veg" },
  { name: "Kheer", price: 70, desc: "Rice pudding flavored with cardamom", type: "sweets", image: "/dishimages/sweet3.jpg", category: "veg" },
  { name: "Rasgulla", price: 65, desc: "Spongy cheese balls in sugar syrup", type: "sweets", image: "/dishimages/sweet4.jpg", category: "veg" },
  { name: "Barfi", price: 55, desc: "Dense milk-based sweet topped with nuts", type: "sweets", image: "/dishimages/sweet5.jpg", category: "veg" },
  { name: "Besan Ladoo", price: 50, desc: "Gram flour balls sweetened with ghee", type: "sweets", image: "/dishimages/sweet6.jpg", category: "veg" },
  { name: "Modak", price: 75, desc: "Steamed dumpling with coconut-jaggery filling", type: "sweets", image: "/dishimages/sweet7.jpg", category: "veg" },

  { name: "Plain Rice", price: 40, desc: "Steamed white rice", type: "rice", image: "/dishimages/rice1.jpg", category: "veg" },
  { name: "Jeera Rice", price: 60, desc: "Cumin flavored basmati rice", type: "rice", image: "/dishimages/rice2.jpg", category: "veg" },
  { name: "Pulao", price: 90, desc: "Spiced rice with vegetables", type: "rice", image: "/dishimages/rice3.jpg", category: "veg" },
  { name: "Veg Biryani", price: 120, desc: "Fragrant rice with vegetables & spices", type: "rice", image: "/dishimages/rice4.jpg", category: "veg" },
  { name: "Curd Rice", price: 70, desc: "Creamy rice mixed with curd and spices", type: "rice", image: "/dishimages/rice5.jpg", category: "veg" },
  { name: "Fried Rice", price: 110, desc: "Stir-fried rice with soy sauce & veggies", type: "rice", image: "/dishimages/rice6.jpg", category: "veg" },
  { name: "Lemon Rice", price: 60, desc: "Tangy rice with mustard seeds and curry leaves", type: "rice", image: "/dishimages/rice7.jpg", category: "veg" },

  { name: "Paneer Tikka", price: 150, desc: "Grilled paneer cubes marinated in spices", type: "starters", image: "/dishimages/starter1.jpg", category: "veg" },
  { name: "Veg Spring Roll", price: 90, desc: "Crispy rolls filled with veggies", type: "starters", image: "/dishimages/starter2.jpg", category: "veg" },
  { name: "Hara Bhara Kebab", price: 100, desc: "Spinach and peas cutlets", type: "starters", image: "/dishimages/starter3.jpg", category: "veg" },
  { name: "Samosa", price: 30, desc: "Deep-fried pastry with potato filling", type: "starters", image: "/dishimages/starter4.jpg", category: "veg" },
  { name: "Manchurian Balls", price: 120, desc: "Fried vegetable balls in spicy sauce", type: "starters", image: "/dishimages/starter5.jpg", category: "veg" },
  { name: "Cheese Corn Balls", price: 110, desc: "Cheesy, crispy balls of corn and cheese", type: "starters", image: "/dishimages/starter6.jpg", category: "veg" },

  { name: "Vada Pav", price: 25, desc: "Spicy potato fritter in a bun", type: "snacks", image: "/dishimages/snack1.jpg", category: "veg" },
  { name: "Pav Bhaji", price: 90, desc: "Mashed vegetable curry with buttered buns", type: "snacks", image: "/dishimages/snack2.jpg", category: "veg" },
  { name: "Dabeli", price: 40, desc: "Spicy mashed potato sandwich with chutneys", type: "snacks", image: "/dishimages/snack3.jpg", category: "veg" },
  { name: "Misal Pav", price: 80, desc: "Spicy sprout curry with buns", type: "snacks", image: "/dishimages/snack4.jpg", category: "veg" },
  { name: "Poha", price: 40, desc: "Flattened rice with mustard seeds and peanuts", type: "snacks", image: "/dishimages/snack5.jpg", category: "veg" },
  { name: "Upma", price: 45, desc: "Savory semolina porridge", type: "snacks", image: "/dishimages/snack6.jpg", category: "veg" },
  { name: "Sabudana Khichdi", price: 70, desc: "Sago pearls with peanuts and potatoes", type: "snacks", image: "/dishimages/snack7.jpg", category: "veg" },

  { name: "Tandoori Roti", price: 20, desc: "Whole wheat roti cooked in clay oven", type: "breads", image: "/dishimages/bread1.jpg", category: "veg" },
  { name: "Butter Naan", price: 35, desc: "Soft flatbread brushed with butter", type: "breads", image: "/dishimages/bread2.jpg", category: "veg" },
  { name: "Garlic Naan", price: 40, desc: "Naan topped with garlic and coriander", type: "breads", image: "/dishimages/bread3.jpg", category: "veg" },
  { name: "Missi Roti", price: 25, desc: "Gram flour flatbread with spices", type: "breads", image: "/dishimages/bread4.jpg", category: "veg" },
  { name: "Lachha Paratha", price: 30, desc: "Layered flatbread fried in ghee", type: "breads", image: "/dishimages/bread5.jpg", category: "veg" },
  { name: "Bhakri", price: 20, desc: "Thick millet flatbread", type: "breads", image: "/dishimages/bread6.jpg", category: "veg" },
  { name: "Chapati", price: 15, desc: "Thin whole wheat flatbread", type: "breads", image: "/dishimages/bread7.jpg", category: "veg" },

  { name: "Paneer Butter Masala", price: 140, desc: "Cottage cheese cubes in creamy tomato gravy", type: "curries", image: "/dishimages/curry1.jpg", category: "veg" },
  { name: "Chole", price: 100, desc: "Spicy chickpea curry", type: "curries", image: "/dishimages/curry2.jpg", category: "veg" },
  { name: "Mix Veg Curry", price: 110, desc: "Seasonal veggies in rich gravy", type: "curries", image: "/dishimages/curry3.jpg", category: "veg" },
  { name: "Aloo Gobi", price: 90, desc: "Potato and cauliflower curry", type: "curries", image: "/dishimages/curry4.jpg", category: "veg" },
  { name: "Baingan Bharta", price: 95, desc: "Roasted eggplant mash cooked with spices", type: "curries", image: "/dishimages/curry5.jpg", category: "veg" },
  { name: "Kadhi Pakora", price: 85, desc: "Yogurt-based curry with gram flour fritters", type: "curries", image: "/dishimages/curry6.jpg", category: "veg" },
  { name: "Dal Makhani", price: 120, desc: "Black lentils cooked in creamy gravy", type: "curries", image: "/dishimages/curry7.jpg", category: "veg" },

  { name: "Masala Chaas", price: 30, desc: "Spiced buttermilk with cumin and coriander", type: "drinks", image: "/dishimages/drink1.jpg", category: "veg" },
  { name: "Lassi", price: 40, desc: "Sweet yogurt-based drink", type: "drinks", image: "/dishimages/drink2.jpg", category: "veg" },
  { name: "Solkadhi", price: 35, desc: "Kokum and coconut milk digestive drink", type: "drinks", image: "/dishimages/drink3.jpg", category: "veg" },
  { name: "Nimbu Pani", price: 25, desc: "Refreshing lemon water", type: "drinks", image: "/dishimages/drink4.jpg", category: "veg" },
  { name: "Jaljeera", price: 30, desc: "Tangy and spicy cumin-flavored drink", type: "drinks", image: "/dishimages/drink5.jpg", category: "veg" },
  { name: "Coconut Water", price: 50, desc: "Fresh and natural drink from coconut", type: "drinks", image: "/dishimages/drink6.jpg", category: "veg" },
  { name: "Rose Milk", price: 35, desc: "Sweetened milk with rose syrup", type: "drinks", image: "/dishimages/drink7.jpg", category: "veg" },




  // Added non‑veg items
 [
  { name: "Butter Chicken", price: 180, desc: "Creamy tomato chicken curry", type: "curries", image: "/dishimages/nonveg1.jpg", category: "chicken" },
  { name: "Chicken Tikka", price: 160, desc: "Grilled spiced chicken cubes", type: "starters", image: "/dishimages/nonveg2.jpg", category: "chicken" },
  { name: "Mutton Biryani", price: 220, desc: "Fragrant rice with tender mutton pieces", type: "rice", image: "/dishimages/nonveg3.jpg", category: "mutton" },
  { name: "Fish Curry", price: 200, desc: "Spicy coastal fish curry", type: "curries", image: "/dishimages/nonveg4.jpg", category: "fish" },
  { name: "Prawn Masala", price: 210, desc: "Prawns cooked in tangy masala", type: "curries", image: "/dishimages/nonveg5.jpg", category: "prawn" },
  { name: "Chicken Kebab", price: 140, desc: "Succulent chicken skewers", type: "starters", image: "/dishimages/nonveg6.jpg", category: "chicken" },
  { name: "Keema Pav", price: 130, desc: "Spiced minced mutton with buns", type: "snacks", image: "/dishimages/nonveg7.jpg", category: "mutton" },
  { name: "Egg Bhurji", price: 90, desc: "Spiced scrambled eggs", type: "starters", image: "/dishimages/egg1.jpg", category: "egg" },
  { name: "Egg Curry", price: 120, desc: "Boiled eggs in spicy gravy", type: "curries", image: "/dishimages/egg2.jpg", category: "egg" },
  { name: "Egg Fried Rice", price: 110, desc: "Stir‑fried rice with eggs & veggies", type: "rice", image: "/dishimages/egg3.jpg", category: "egg" },
  { name: "Egg Roll", price: 80, desc: "Wrap stuffed with egg and spices", type: "snacks", image: "/dishimages/egg4.jpg", category: "egg" },
  { name: "Egg Pakora", price: 100, desc: "Deep‑fried egg fritters", type: "starters", image: "/dishimages/egg5.jpg", category: "egg" },
  { name: "Chicken 65", price: 150, desc: "Fried spicy chicken bites", type: "starters", image: "/dishimages/nonveg8.jpg", category: "chicken" },
  { name: "Mutton Rogan Josh", price: 230, desc: "Kashmiri-style aromatic lamb curry", type: "curries", image: "/dishimages/nonveg9.jpg", category: "mutton" },
  { name: "Fish Fry", price: 170, desc: "Crispy fried fish fillets", type: "starters", image: "/dishimages/nonveg10.jpg", category: "fish" },
  { name: "Chicken Biryani", price: 200, desc: "Classic basmati rice with chicken", type: "rice", image: "/dishimages/nonveg11.jpg", category: "chicken" },
  { name: "Prawn Fried Rice", price: 190, desc: "Rice tossed with prawns", type: "rice", image: "/dishimages/nonveg12.jpg", category: "prawn" },
  { name: "Egg Pakora", price: 95, desc: "Egg slices coated and fried", type: "starters", image: "/dishimages/egg6.jpg", category: "egg" },
  { name: "Egg Momos", price: 100, desc: "Steamed dumplings with egg filling", type: "starters", image: "/dishimages/egg7.jpg", category: "egg" },
  { name: "Egg Pulao", price: 115, desc: "Spiced rice cooked with eggs", type: "rice", image: "/dishimages/egg8.jpg", category: "egg" },
  { name: "Chicken Shawarma", price: 170, desc: "Marinated chicken wrap", type: "snacks", image: "/dishimages/nonveg13.jpg", category: "chicken" },
  { name: "Mutton Keema", price: 140, desc: "Spiced minced lamb curry", type: "curries", image: "/dishimages/nonveg14.jpg", category: "mutton" },
  { name: "Fish Biryani", price: 210, desc: "Rice cooked with fish and spices", type: "rice", image: "/dishimages/nonveg15.jpg", category: "fish" },
  { name: "Egg Toast", price: 70, desc: "Grilled bread with egg topping", type: "snacks", image: "/dishimages/egg9.jpg", category: "egg" },
  { name: "Egg Dosa", price: 80, desc: "South Indian crepe with egg", type: "snacks", image: "/dishimages/egg10.jpg", category: "egg" },
  { name: "Chicken Lollipop", price: 160, desc: "Spicy chicken mid‑wings", type: "starters", image: "/dishimages/nonveg16.jpg", category: "chicken" },
  { name: "Mutton Curry", price: 220, desc: "Traditional slow‑cooked lamb curry", type: "curries", image: "/dishimages/nonveg17.jpg", category: "mutton" },
  { name: "Prawn Biryani", price: 230, desc: "South Indian style prawn rice", type: "rice", image: "/dishimages/nonveg18.jpg", category: "prawn" },
  { name: "Egg Frankie", price: 85, desc: "Egg roll wrapped in flatbread", type: "snacks", image: "/dishimages/egg11.jpg", category: "egg" },
  { name: "Chicken Korma", price: 190, desc: "Creamy nut-based chicken curry", type: "curries", image: "/dishimages/nonveg19.jpg", category: "chicken" },
  { name: "Fish Pulao", price: 195, desc: "Delicate fish pulao rice", type: "rice", image: "/dishimages/nonveg20.jpg", category: "fish" }
]


  
];

export default dishes;
