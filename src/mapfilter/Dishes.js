const dishes = [
  { name: "Gulab Jamun", price: 60, desc: "Soft milk-solid balls soaked in sugar syrup", type: "sweets", image: "/dishimages/sweet1.jpg" },
  { name: "Jalebi", price: 50, desc: "Crispy deep-fried spirals soaked in syrup", type: "sweets", image: "/dishimages/sweet2.jpg" },
  { name: "Kheer", price: 70, desc: "Rice pudding flavored with cardamom", type: "sweets", image: "/dishimages/sweet3.jpg" },
  { name: "Rasgulla", price: 65, desc: "Spongy cheese balls in sugar syrup", type: "sweets", image: "/dishimages/sweet4.jpg" },
  { name: "Barfi", price: 55, desc: "Dense milk-based sweet topped with nuts", type: "sweets", image: "/dishimages/sweet5.jpg" },
  { name: "Besan Ladoo", price: 50, desc: "Gram flour balls sweetened with ghee", type: "sweets", image: "/dishimages/sweet6.jpg" },
  { name: "Modak", price: 75, desc: "Steamed dumpling with coconut-jaggery filling", type: "sweets", image: "/dishimages/sweet7.jpg" },

  { name: "Plain Rice", price: 40, desc: "Steamed white rice", type: "rice", image: "/dishimages/rice1.jpg" },
  { name: "Jeera Rice", price: 60, desc: "Cumin flavored basmati rice", type: "rice", image: "/dishimages/rice2.jpg" },
  { name: "Pulao", price: 90, desc: "Spiced rice with vegetables", type: "rice", image: "/dishimages/rice3.jpg" },
  { name: "Veg Biryani", price: 120, desc: "Fragrant rice with vegetables & spices", type: "rice", image: "/dishimages/rice4.jpg" },
  { name: "Curd Rice", price: 70, desc: "Creamy rice mixed with curd and spices", type: "rice", image: "/dishimages/rice5.jpg" },
  { name: "Fried Rice", price: 110, desc: "Stir-fried rice with soy sauce & veggies", type: "rice", image: "/dishimages/rice6.jpg" },
  { name: "Lemon Rice", price: 60, desc: "Tangy rice with mustard seeds and curry leaves", type: "rice", image: "/dishimages/rice7.jpg" },

  { name: "Paneer Tikka", price: 150, desc: "Grilled paneer cubes marinated in spices", type: "starters", image: "/dishimages/starter1.jpg" },
  { name: "Veg Spring Roll", price: 90, desc: "Crispy rolls filled with veggies", type: "starters", image: "/dishimages/starter2.jpg" },
  { name: "Hara Bhara Kebab", price: 100, desc: "Spinach and peas cutlets", type: "starters", image: "/dishimages/starter3.jpg" },
  { name: "Samosa", price: 30, desc: "Deep-fried pastry with potato filling", type: "starters", image: "/dishimages/starter4.jpg" },
  { name: "Manchurian Balls", price: 120, desc: "Fried vegetable balls in spicy sauce", type: "starters", image: "/dishimages/starter5.jpg" },
  { name: "Cheese Corn Balls", price: 110, desc: "Cheesy, crispy balls of corn and cheese", type: "starters", image: "/dishimages/starter6.jpg" },

  { name: "Vada Pav", price: 25, desc: "Spicy potato fritter in a bun", type: "snacks", image: "/dishimages/snack1.jpg" },
  { name: "Pav Bhaji", price: 90, desc: "Mashed vegetable curry with buttered buns", type: "snacks", image: "/dishimages/snack2.jpg" },
  { name: "Dabeli", price: 40, desc: "Spicy mashed potato sandwich with chutneys", type: "snacks", image: "/dishimages/snack3.jpg" },
  { name: "Misal Pav", price: 80, desc: "Spicy sprout curry with buns", type: "snacks", image: "/dishimages/snack4.jpg" },
  { name: "Poha", price: 40, desc: "Flattened rice with mustard seeds and peanuts", type: "snacks", image: "/dishimages/snack5.jpg" },
  { name: "Upma", price: 45, desc: "Savory semolina porridge", type: "snacks", image: "/dishimages/snack6.jpg" },
  { name: "Sabudana Khichdi", price: 70, desc: "Sago pearls with peanuts and potatoes", type: "snacks", image: "/dishimages/snack7.jpg" },

  { name: "Tandoori Roti", price: 20, desc: "Whole wheat roti cooked in clay oven", type: "breads", image: "/dishimages/bread1.jpg" },
  { name: "Butter Naan", price: 35, desc: "Soft flatbread brushed with butter", type: "breads", image: "/dishimages/bread2.jpg" },
  { name: "Garlic Naan", price: 40, desc: "Naan topped with garlic and coriander", type: "breads", image: "/dishimages/bread3.jpg" },
  { name: "Missi Roti", price: 25, desc: "Gram flour flatbread with spices", type: "breads", image: "/dishimages/bread4.jpg" },
  { name: "Lachha Paratha", price: 30, desc: "Layered flatbread fried in ghee", type: "breads", image: "/dishimages/bread5.jpg" },
  { name: "Bhakri", price: 20, desc: "Thick millet flatbread", type: "breads", image: "/dishimages/bread6.jpg" },
  { name: "Chapati", price: 15, desc: "Thin whole wheat flatbread", type: "breads", image: "/dishimages/bread7.jpg" },

  { name: "Paneer Butter Masala", price: 140, desc: "Cottage cheese cubes in creamy tomato gravy", type: "curries", image: "/dishimages/curry1.jpg" },
  { name: "Chole", price: 100, desc: "Spicy chickpea curry", type: "curries", image: "/dishimages/curry2.jpg" },
  { name: "Mix Veg Curry", price: 110, desc: "Seasonal veggies in rich gravy", type: "curries", image: "/dishimages/curry3.jpg" },
  { name: "Aloo Gobi", price: 90, desc: "Potato and cauliflower curry", type: "curries", image: "/dishimages/curry4.jpg" },
  { name: "Baingan Bharta", price: 95, desc: "Roasted eggplant mash cooked with spices", type: "curries", image: "/dishimages/curry5.jpg" },
  { name: "Kadhi Pakora", price: 85, desc: "Yogurt-based curry with gram flour fritters", type: "curries", image: "/dishimages/curry6.jpg" },
  { name: "Dal Makhani", price: 120, desc: "Black lentils cooked in creamy gravy", type: "curries", image: "/dishimages/curry7.jpg" },

  { name: "Masala Chaas", price: 30, desc: "Spiced buttermilk with cumin and coriander", type: "drinks", image: "/dishimages/drink1.jpg" },
  { name: "Lassi", price: 40, desc: "Sweet yogurt-based drink", type: "drinks", image: "/dishimages/drink2.jpg" },
  { name: "Solkadhi", price: 35, desc: "Kokum and coconut milk digestive drink", type: "drinks", image: "/dishimages/drink3.jpg" },
  { name: "Nimbu Pani", price: 25, desc: "Refreshing lemon water", type: "drinks", image: "/dishimages/drink4.jpg" },
  { name: "Jaljeera", price: 30, desc: "Tangy and spicy cumin-flavored drink", type: "drinks", image: "/dishimages/drink5.jpg" },
  { name: "Coconut Water", price: 50, desc: "Fresh and natural drink from coconut", type: "drinks", image: "/dishimages/drink6.jpg" },
  { name: "Rose Milk", price: 35, desc: "Sweetened milk with rose syrup", type: "drinks", image: "/dishimages/drink7.jpg" }
];

export default dishes;
