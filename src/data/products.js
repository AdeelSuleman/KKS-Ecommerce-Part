import Bihari from "../assets/ProductsImages/Bihari.png"
import BombayBiryani from "../assets/ProductsImages/BombayBiryani.png"
import MixPickle from "../assets/ProductsImages/MixPickle.png"
import RedChilli from "../assets/ProductsImages/RedChilli.png"
import Product1 from "../assets/ProductsImages/Product1.jpg"
import Product2 from "../assets/ProductsImages/Product2.jpg"
import Product3 from "../assets/ProductsImages/Product3.png"
import HotItem from "../assets/ProductsImages/HotItem.png"
import AcharGosht from "../assets/ProductsImages/AcharGosht.png"
import AcharMasala from "../assets/ProductsImages/AcharMasala.png"
import BehariBoti from "../assets/ProductsImages/BehariBoti.png"
import Bombay_Biryani from "../assets/ProductsImages/Bombay_Biryani.png"
import Chapli_Kabab from "../assets/ProductsImages/Chapli_Kabab.png"
import Chicken_Curry from "../assets/ProductsImages/Chicken_Curry.png"
import Chicken_Tandoori from "../assets/ProductsImages/Chicken_Tandoori.png"
import Chicken_Tikka from "../assets/ProductsImages/Chicken_Tikka.png"
import Curry_Powder from "../assets/ProductsImages/Curry_Powder.png"
import Dahi_BaraMasala from "../assets/ProductsImages/Dahi_BaraMasala.png"
import Fish_FriedCurry from "../assets/ProductsImages/Fish_FriedCurry.png"
import Haleem from "../assets/ProductsImages/Haleem.png"
import Karahi_Gosht from "../assets/ProductsImages/Karahi_Gosht.png"
import kofta from "../assets/ProductsImages/kofta.png"
import Nihari from "../assets/ProductsImages/Nihari.png"
import Pakora_Masala from "../assets/ProductsImages/Pakora_Masala.png"
import Paya from "../assets/ProductsImages/Paya.png"
import pulao_biryani from "../assets/ProductsImages/pulao_biryani.png"
import qeema from "../assets/ProductsImages/qeema.png"
import qorma from "../assets/ProductsImages/qorma.png"
import Seekh_Kabab from "../assets/ProductsImages/Seekh_Kabab.png"
import Shami_Kabab from "../assets/ProductsImages/Shami_Kabab.png"
import Tikka_Boti from "../assets/ProductsImages/Tikka_Boti.png"
import White_Karahi from "../assets/ProductsImages/White_Karahi.png"
import White_Qorma from "../assets/ProductsImages/White_Qorma.png"

export const categories = [
    { id: 1, name: "Recipe Mixes" },
    { id: 2, name: "Plain Spices" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Pickles" },
    { id: 5, name: "Sauces" },
    { id: 6, name: "Pastes" },
    { id: 7, name: "Miscellaneous" },
  ];
  
  export const products = [
    {
      id: 101,
      p_name: "Achar Gosht",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": AcharGosht,
      "1000g": Product3,
      },
      p_category: "Recipe Mixes",
      p_hotItem: HotItem,
      p_image: AcharGosht,
      p_images: [ AcharGosht, AcharGosht, AcharGosht, Product3 ],
      p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 102,
      p_name: "Achar Masala",
      p_price: 48,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": AcharMasala,
      "1000g": Product3,
      },
      p_category: "Recipe Mixes",
      p_hotItem: "",
      p_image: AcharMasala,
      p_images: [ AcharMasala, AcharMasala, AcharMasala, Product3 ],
      p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 103,
      p_name: "Behari Boti",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": BehariBoti,
      "1000g": Product3,
      },
      p_category: "Plain Spices",
      p_hotItem: HotItem,
      p_image: BehariBoti,
      p_images: [ BehariBoti, BehariBoti, BehariBoti, Product3 ],
      p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 104,
      p_name: "Bombay Biryani",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Bombay_Biryani,
      "1000g": Product3,
      },
      p_category: "Plain Spices",
      p_hotItem: "",
      p_image: Bombay_Biryani,
      p_images: [ Bombay_Biryani, Bombay_Biryani, Bombay_Biryani, Product3 ],
      p_description: "Premium mixed pickle with balanced spices for everyday meals.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 105,
      p_name: "Chapli Kabab",
      p_price: 45,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Chapli_Kabab,
      "1000g": Product3,
      },
      p_category: "Plain Spices",
      p_hotItem: HotItem,
      p_image: Chapli_Kabab,
      p_images: [ Chapli_Kabab, Chapli_Kabab, Chapli_Kabab, Product3 ],
      p_description: "Fresh garlic paste made from real garlic with no preservatives.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 106,
      p_name: "Chicken Curry",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Chicken_Curry,
      "1000g": Product3,
      },
      p_category: "Plain Spices",
      p_hotItem: HotItem,
      p_image: Chicken_Curry,
      p_images: [ Chicken_Curry, Chicken_Curry, Chicken_Curry, Product3 ],
      p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 107,
      p_name: "Chicken Tandoori",
      p_price: 48,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Chicken_Tandoori,
      "1000g": Product3,
      },
      p_category: "Desserts",
      p_hotItem: "",
      p_image: Chicken_Tandoori,
      p_images: [ Chicken_Tandoori, Chicken_Tandoori, Chicken_Tandoori, Product3 ],
      p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 108,
      p_name: "Chicken Tikka",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Chicken_Tikka,
      "1000g": Product3,
      },
      p_category: "Desserts",
      p_hotItem: HotItem,
      p_image: Chicken_Tikka,
      p_images: [ Chicken_Tikka, Chicken_Tikka, Chicken_Tikka, Product3 ],
      p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 109,
      p_name: "Curry Powder",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Curry_Powder,
      "1000g": Product3,
      },
      p_category: "Desserts",
      p_hotItem: "",
      p_image: Curry_Powder,
      p_images: [ Curry_Powder, Curry_Powder, Curry_Powder, Product3 ],
      p_description: "Premium mixed pickle with balanced spices for everyday meals.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 110,
      p_name: "Dahi Bara Masala",
      p_price: 45,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Dahi_BaraMasala,
      "1000g": Product3,
      },
      p_category: "Pickles",
      p_hotItem: HotItem,
      p_image: Dahi_BaraMasala,
      p_images: [ Dahi_BaraMasala, Dahi_BaraMasala, Dahi_BaraMasala, Product3 ],
      p_description: "Fresh garlic paste made from real garlic with no preservatives.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 111,
      p_name: "Fish Fried Curry",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Fish_FriedCurry,
      "1000g": Product3,
      },
      p_category: "Pickles",
      p_hotItem: HotItem,
      p_image: Fish_FriedCurry,
      p_images: [ Fish_FriedCurry, Fish_FriedCurry, Fish_FriedCurry, Product3 ],
      p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 112,
      p_name: "Haleem",
      p_price: 48,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Haleem,
      "1000g": Product3,
      },
      p_category: "Pickles",
      p_hotItem: "",
      p_image: Haleem,
      p_images: [ Haleem, Haleem, Haleem, Product3 ],
      p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 113,
      p_name: "Karahi Gosht",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Karahi_Gosht,
      "1000g": Product3,
      },
      p_category: "Pickles",
      p_hotItem: HotItem,
      p_image: Karahi_Gosht,
      p_images: [ Karahi_Gosht, Karahi_Gosht, Karahi_Gosht, Product3 ],
      p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 114,
      p_name: "kofta",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": kofta,
      "1000g": Product3,
      },
      p_category: "Sauces",
      p_hotItem: "",
      p_image: kofta,
      p_images: [ kofta, kofta, kofta, Product3 ],
      p_description: "Premium mixed pickle with balanced spices for everyday meals.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 115,
      p_name: "Nihari",
      p_price: 45,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Nihari,
      "1000g": Product3,
      },
      p_category: "Sauces",
      p_hotItem: HotItem,
      p_image: Nihari,
      p_images: [ Nihari, Nihari, Nihari, Product3 ],
      p_description: "Fresh garlic paste made from real garlic with no preservatives.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 116,
      p_name: "Pakora Masala",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Pakora_Masala,
      "1000g": Product3,
      },
      p_category: "Sauces",
      p_hotItem: HotItem,
      p_image: Pakora_Masala,
      p_images: [ Pakora_Masala, Pakora_Masala, Pakora_Masala, Product3 ],
      p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 117,
      p_name: "Paya",
      p_price: 48,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Paya,
      "1000g": Product3,
      },
      p_category: "Pastes",
      p_hotItem: "",
      p_image: Paya,
      p_images: [ Paya, Paya, Paya, Product3 ],
      p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 118,
      p_name: "Pulao Biryani",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": pulao_biryani,
      "1000g": Product3,
      },
      p_category: "Pastes",
      p_hotItem: HotItem,
      p_image: pulao_biryani,
      p_images: [ pulao_biryani, pulao_biryani, pulao_biryani, Product3 ],
      p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 119,
      p_name: "Qeema",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": qeema,
      "1000g": Product3,
      },
      p_category: "Pastes",
      p_hotItem: "",
      p_image: qeema,
      p_images: [ qeema, qeema, qeema, Product3 ],
      p_description: "Premium mixed pickle with balanced spices for everyday meals.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 120,
      p_name: "Qorma",
      p_price: 45,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": qorma,
      "1000g": Product3,
      },
      p_category: "Miscellaneous",
      p_hotItem: HotItem,
      p_image: qorma,
      p_images: [ qorma, qorma, qorma, Product3 ],
      p_description: "Fresh garlic paste made from real garlic with no preservatives.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 121,
      p_name: "Seekh Kabab",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Seekh_Kabab,
      "1000g": Product3,
      },
      p_category: "Miscellaneous",
      p_hotItem: HotItem,
      p_image: Seekh_Kabab,
      p_images: [ Seekh_Kabab, Seekh_Kabab, Seekh_Kabab, Product3 ],
      p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 122,
      p_name: "Shami Kabab",
      p_price: 48,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Shami_Kabab,
      "1000g": Product3,
      },
      p_category: "Miscellaneous",
      p_hotItem: "",
      p_image: Shami_Kabab,
      p_images: [ Shami_Kabab, Shami_Kabab, Shami_Kabab, Product3 ],
      p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 123,
      p_name: "Tikka Boti",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": Tikka_Boti,
      "1000g": Product3,
      },
      p_category: "Miscellaneous",
      p_hotItem: HotItem,
      p_image: Tikka_Boti,
      p_images: [ Tikka_Boti, Tikka_Boti, Tikka_Boti, Product3 ],
      p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 124,
      p_name: "White Karahi",
      p_price: 38,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": White_Karahi,
      "1000g": Product3,
      },
      p_category: "Pickles",
      p_hotItem: "",
      p_image: White_Karahi,
      p_images: [ White_Karahi, White_Karahi, White_Karahi, Product3 ],
      p_description: "Premium mixed pickle with balanced spices for everyday meals.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
    {
      id: 125,
      p_name: "White Qorma",
      p_price: 45,
      p_gram: ["250g", "1000g"],
      p_weightImages: {
      "250g": White_Qorma,
      "1000g": Product3,
      },
      p_category: "Pastes",
      p_hotItem: HotItem,
      p_image: White_Qorma,
      p_images: [ White_Qorma, White_Qorma, White_Qorma, Product3 ],
      p_description: "Fresh garlic paste made from real garlic with no preservatives.",
      p_packaging: [
        "Box and Pouch.",
        "Country of Origin: Pakistan",
        "Delivery Area: Nationwide",
        "Ships in 3 to 4 working days",
        "Shipped By: Kausar",
      ]
    },
  ];
  