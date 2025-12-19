import Product3 from "../assets/ProductsImages/Product3.png"
import HotItem from "../assets/ProductsImages/HotItem.png"


      // Images Category Recipe Mixes
import AcharGosht from "../assets/ProductsImages/RecipeMixes/AcharGosht.png"
import AcharMasala from "../assets/ProductsImages/RecipeMixes/AcharMasala.png"
import BehariBoti from "../assets/ProductsImages/RecipeMixes/BehariBoti.png"
import Bombay_Biryani from "../assets/ProductsImages/RecipeMixes/Bombay_Biryani.png"
import Chapli_Kabab from "../assets/ProductsImages/RecipeMixes/Chapli_Kabab.png"
import Chicken_Curry from "../assets/ProductsImages/RecipeMixes/Chicken_Curry.png"
import Chicken_Tandoori from "../assets/ProductsImages/RecipeMixes/Chicken_Tandoori.png"
import Chicken_Tikka from "../assets/ProductsImages/RecipeMixes/Chicken_Tikka.png"
import Curry_Powder from "../assets/ProductsImages/RecipeMixes/Curry_Powder.png"
import Dahi_BaraMasala from "../assets/ProductsImages/RecipeMixes/Dahi_BaraMasala.png"
import Fish_FriedCurry from "../assets/ProductsImages/RecipeMixes/Fish_FriedCurry.png"
import Haleem from "../assets/ProductsImages/RecipeMixes/Haleem.png"
import Karachi_Biryani from "../assets/ProductsImages/RecipeMixes/karachiBiryani.png"
import Karahi_Gosht from "../assets/ProductsImages/RecipeMixes/Karahi_Gosht.png"
import kofta from "../assets/ProductsImages/RecipeMixes/kofta.png"
import Nihari from "../assets/ProductsImages/RecipeMixes/Nihari.png"
import Pakora_Masala from "../assets/ProductsImages/RecipeMixes/Pakora_Masala.png"
import Paya from "../assets/ProductsImages/RecipeMixes/Paya.png"
import pulao_biryani from "../assets/ProductsImages/RecipeMixes/pulao_biryani.png"
import qeema from "../assets/ProductsImages/RecipeMixes/qeema.png"
import qorma from "../assets/ProductsImages/RecipeMixes/qorma.png"
import Seekh_Kabab from "../assets/ProductsImages/RecipeMixes/Seekh_Kabab.png"
import Shami_Kabab from "../assets/ProductsImages/RecipeMixes/Shami_Kabab.png"
import Tikka_Boti from "../assets/ProductsImages/RecipeMixes/Tikka_Boti.png"
import White_Karahi from "../assets/ProductsImages/RecipeMixes/White_Karahi.png"
import White_Qorma from "../assets/ProductsImages/RecipeMixes/White_Qorma.png"



      // Images Category Plain Spices
import Black_Pepper_Powder from "../assets/ProductsImages/PlainSpices/BlackPepperPowder.png"
import Chaat_Masala from "../assets/ProductsImages/PlainSpices/ChaatMasala.png"
import Coriander_Powder from "../assets/ProductsImages/PlainSpices/CorianderPowder.png"
import Cumin_Powder from "../assets/ProductsImages/PlainSpices/CuminPowder.png"
import Garam_Masala from "../assets/ProductsImages/PlainSpices/GaramMasala.png"
import Garlic_Powder from "../assets/ProductsImages/PlainSpices/GarlicPowder.png"
import Ginger_Powder from "../assets/ProductsImages/PlainSpices/GingerPowder.png"
import Hari_Mirch_Masala from "../assets/ProductsImages/PlainSpices/HariMirchMasala.png"
import Meat_Tenderizer from "../assets/ProductsImages/PlainSpices/MeatTenderizer.png"
import Pakeeza_Chaat_Masala from "../assets/ProductsImages/PlainSpices/PakeezaChaatMasala.png"
import RedChiliCrushed from "../assets/ProductsImages/PlainSpices/RedChiliCrushed.png"
import Red_Chili_Powder from "../assets/ProductsImages/PlainSpices/RedChiliPowder.png"
import Special_Chaat_Masala from "../assets/ProductsImages/PlainSpices/SpecialChaatMasala.png"
import Turmeric_Powder from "../assets/ProductsImages/PlainSpices/TurmericPowder.png"
import White_Pepper_Powder from "../assets/ProductsImages/PlainSpices/WhitePepperPowder.png"






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


  // Category Recipe Mixes
  {
    id: 101,
    p_name: "Achar Gosht",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": AcharGosht,
    },
    p_weightPrice: {
      "1000g": 850,
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: AcharGosht,
    p_images: [AcharGosht, AcharGosht, AcharGosht, Product3],
    p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 102,
    p_name: "Achar Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": AcharMasala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: AcharMasala,
    p_images: [AcharMasala, AcharMasala, AcharMasala, Product3],
    p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 103,
    p_name: "Behari Boti",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": BehariBoti,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: BehariBoti,
    p_images: [BehariBoti, BehariBoti, BehariBoti, Product3],
    p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 104,
    p_name: "Bombay Biryani",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Bombay_Biryani,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Bombay_Biryani,
    p_images: [Bombay_Biryani, Bombay_Biryani, Bombay_Biryani, Product3],
    p_description: "Premium mixed pickle with balanced spices for everyday meals.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 105,
    p_name: "Chapli Kabab",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Chapli_Kabab,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Chapli_Kabab,
    p_images: [Chapli_Kabab, Chapli_Kabab, Chapli_Kabab, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 106,
    p_name: "Chicken Curry",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Chicken_Curry,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Chicken_Curry,
    p_images: [Chicken_Curry, Chicken_Curry, Chicken_Curry, Product3],
    p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 107,
    p_name: "Chicken Tandoori",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Chicken_Tandoori,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Chicken_Tandoori,
    p_images: [Chicken_Tandoori, Chicken_Tandoori, Chicken_Tandoori, Product3],
    p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 108,
    p_name: "Chicken Tikka",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Product3,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Chicken_Tikka,
    p_images: [Chicken_Tikka, Chicken_Tikka, Chicken_Tikka, Product3],
    p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 109,
    p_name: "Curry Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Curry_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Curry_Powder,
    p_images: [Curry_Powder, Curry_Powder, Curry_Powder, Product3],
    p_description: "Premium mixed pickle with balanced spices for everyday meals.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 110,
    p_name: "Dahi Bara Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Dahi_BaraMasala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Dahi_BaraMasala,
    p_images: [Dahi_BaraMasala, Dahi_BaraMasala, Dahi_BaraMasala, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 111,
    p_name: "Fish Fried Curry",
    p_gram: ["250g", "1000g"],
    p_weightImages: {
      "1000g": Fish_FriedCurry,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Fish_FriedCurry,
    p_images: [Fish_FriedCurry, Fish_FriedCurry, Fish_FriedCurry, Product3],
    p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 112,
    p_name: "Haleem",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Haleem,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Haleem,
    p_images: [Haleem, Haleem, Haleem, Product3],
    p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 113,
    p_name: "Karachi Biryani",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Karachi_Biryani,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Karachi_Biryani,
    p_images: [Karachi_Biryani, Karachi_Biryani, Karachi_Biryani, Product3],
    p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 114,
    p_name: "Karahi Gosht",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Karahi_Gosht,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Karahi_Gosht,
    p_images: [Karahi_Gosht, Karahi_Gosht, Karahi_Gosht, Product3],
    p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 115,
    p_name: "kofta",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": kofta,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: kofta,
    p_images: [kofta, kofta, kofta, Product3],
    p_description: "Premium mixed pickle with balanced spices for everyday meals.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 116,
    p_name: "Nihari",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Nihari,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Nihari,
    p_images: [Nihari, Nihari, Nihari, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 117,
    p_name: "Pakora Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Pakora_Masala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Pakora_Masala,
    p_images: [Pakora_Masala, Pakora_Masala, Pakora_Masala, Product3],
    p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 118,
    p_name: "Paya",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Paya,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Paya,
    p_images: [Paya, Paya, Paya, Product3],
    p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 119,
    p_name: "Pulao Biryani",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": pulao_biryani,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: pulao_biryani,
    p_images: [pulao_biryani, pulao_biryani, pulao_biryani, Product3],
    p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 120,
    p_name: "Qeema",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": qeema,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: qeema,
    p_images: [qeema, qeema, qeema, Product3],
    p_description: "Premium mixed pickle with balanced spices for everyday meals.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 121,
    p_name: "Qorma",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": qorma,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: qorma,
    p_images: [qorma, qorma, qorma, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 122,
    p_name: "Seekh Kabab",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Seekh_Kabab,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Seekh_Kabab,
    p_images: [Seekh_Kabab, Seekh_Kabab, Seekh_Kabab, Product3],
    p_description: "Authentic Bombay Biryani mix with premium spices for rich flavor.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 123,
    p_name: "Shami Kabab",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Shami_Kabab,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: Shami_Kabab,
    p_images: [Shami_Kabab, Shami_Kabab, Shami_Kabab, Product3],
    p_description: "Traditional Bihari Boti blend crafted with smoky & spicy flavors.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 124,
    p_name: "Tikka Boti",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Tikka_Boti,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: Tikka_Boti,
    p_images: [Tikka_Boti, Tikka_Boti, Tikka_Boti, Product3],
    p_description: "Finely ground red chilli powder made from handpicked spicy red peppers.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 125,
    p_name: "White Karahi",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": White_Karahi,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: "",
    p_image: White_Karahi,
    p_images: [White_Karahi, White_Karahi, White_Karahi, Product3],
    p_description: "Premium mixed pickle with balanced spices for everyday meals.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 126,
    p_name: "White Qorma",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": White_Qorma,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Recipe Mixes",
    p_hotItem: HotItem,
    p_image: White_Qorma,
    p_images: [White_Qorma, White_Qorma, White_Qorma, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },


  // Category Plain Spices
  {
    id: 127,
    p_name: "Black Pepper Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Black_Pepper_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Black_Pepper_Powder,
    p_images: [Black_Pepper_Powder, Black_Pepper_Powder, Black_Pepper_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 128,
    p_name: "Chaat Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Chaat_Masala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Chaat_Masala,
    p_images: [Chaat_Masala, Chaat_Masala, Chaat_Masala, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 129,
    p_name: "Coriander Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Coriander_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Coriander_Powder,
    p_images: [Coriander_Powder, Coriander_Powder, Coriander_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 130,
    p_name: "Cumin Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Cumin_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Cumin_Powder,
    p_images: [Cumin_Powder, Cumin_Powder, Cumin_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 131,
    p_name: "Garam Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Garam_Masala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Garam_Masala,
    p_images: [Garam_Masala, Garam_Masala, Garam_Masala, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 132,
    p_name: "Garlic Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Garlic_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Garlic_Powder,
    p_images: [Garlic_Powder, Garlic_Powder, Garlic_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 133,
    p_name: "Ginger Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Ginger_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Ginger_Powder,
    p_images: [Ginger_Powder, Ginger_Powder, Ginger_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 134,
    p_name: "Hari Mirch Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Hari_Mirch_Masala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Hari_Mirch_Masala,
    p_images: [Hari_Mirch_Masala, Hari_Mirch_Masala, Hari_Mirch_Masala, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 135,
    p_name: "Meat Tenderizer",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Meat_Tenderizer,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Meat_Tenderizer,
    p_images: [Meat_Tenderizer, Meat_Tenderizer, Meat_Tenderizer, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 136,
    p_name: "Pakeeza Chaat Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Pakeeza_Chaat_Masala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Pakeeza_Chaat_Masala,
    p_images: [Pakeeza_Chaat_Masala, Pakeeza_Chaat_Masala, Pakeeza_Chaat_Masala, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 137,
    p_name: "Red Chili Crushed",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": RedChiliCrushed,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: RedChiliCrushed,
    p_images: [RedChiliCrushed, RedChiliCrushed, RedChiliCrushed, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 138,
    p_name: "Red Chili Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Red_Chili_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Red_Chili_Powder,
    p_images: [Red_Chili_Powder, Red_Chili_Powder, Red_Chili_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 139,
    p_name: "Special Chaat Masala",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Special_Chaat_Masala,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Special_Chaat_Masala,
    p_images: [Special_Chaat_Masala, Special_Chaat_Masala, Special_Chaat_Masala, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 140,
    p_name: "Turmeric Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": Turmeric_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: Turmeric_Powder,
    p_images: [Turmeric_Powder, Turmeric_Powder, Turmeric_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
  {
    id: 141,
    p_name: "White Pepper Powder",
    p_gram: ["1000g"],
    p_weightImages: {
      "1000g": White_Pepper_Powder,
    },
    p_weightPrice: {
      "1000g": 850
    },
    p_category: "Plain Spices",
    p_hotItem: HotItem,
    p_image: White_Pepper_Powder,
    p_images: [White_Pepper_Powder, White_Pepper_Powder, White_Pepper_Powder, Product3],
    p_description: "Fresh garlic paste made from real garlic with no preservatives.",
    p_packaging: {
      "1000g": [
        "Pouch",
      ]
    }
  },
];
