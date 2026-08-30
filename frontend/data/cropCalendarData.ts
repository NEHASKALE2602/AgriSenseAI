export type ActivityType =
  | "preparation"
  | "sowing"
  | "growth"
  | "irrigation"
  | "fertilizer"
  | "flowering"
  | "health"
  | "harvest";

export type Crop = {
  name: string;
  season: "Kharif" | "Rabi" | "Summer" | "Annual";
  duration: string;
  searchTerms: string[];
  image: string;
  months: Partial<Record<number, ActivityType[]>>;
  insight: string;
};

export const CROP_CALENDAR_DATA: Crop[] = [
  {
    name: "Rice",
    season: "Kharif",
    duration: "120 - 150 days",
    searchTerms: ["rice", "paddy", "bhata"],
    image: "/crops/rice.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "irrigation", "fertilizer"],
      8: ["growth", "irrigation", "health"],
      9: ["flowering", "irrigation", "health"],
      10: ["harvest"],
    },
    insight:
      "Rice is generally grown during the Kharif season. Maintain suitable soil moisture during establishment and monitor crop health throughout the growing period.",
  },

  {
    name: "Wheat",
    season: "Rabi",
    duration: "120 - 140 days",
    searchTerms: ["wheat", "gehun"],
    image: "/crops/wheat.png",
    months: {
      9: ["preparation"],
      10: ["sowing", "irrigation"],
      11: ["growth", "irrigation", "fertilizer"],
      0: ["growth", "irrigation", "health"],
      1: ["flowering", "irrigation", "health"],
      2: ["harvest"],
    },
    insight:
      "Wheat is a Rabi crop. Timely sowing, irrigation and nutrient management are important during vegetative and reproductive stages.",
  },

  {
    name: "Maize",
    season: "Kharif",
    duration: "90 - 120 days",
    searchTerms: ["maize", "corn", "makka", "corn crop"],
    image: "/crops/maize.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "irrigation"],
      8: ["growth", "health", "irrigation"],
      9: ["flowering", "irrigation", "health"],
      10: ["harvest"],
    },
    insight:
      "Maize requires good soil preparation and adequate moisture during establishment and flowering. Nutrient management is important during rapid growth.",
  },

  {
    name: "Soybean",
    season: "Kharif",
    duration: "90 - 120 days",
    searchTerms: ["soybean", "soya", "soyabean"],
    image: "/crops/soybean.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "health"],
      8: ["flowering", "irrigation", "health"],
      9: ["harvest"],
    },
    insight:
      "Soybean is a Kharif crop. Monitor soil moisture, weeds and crop health carefully during vegetative and flowering stages.",
  },

  {
    name: "Cotton",
    season: "Kharif",
    duration: "150 - 180 days",
    searchTerms: ["cotton", "kapas"],
    image: "/crops/cotton.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer"],
      8: ["growth", "irrigation", "health"],
      9: ["flowering", "health"],
      10: ["flowering", "irrigation"],
      11: ["harvest"],
    },
    insight:
      "Cotton has a long growing cycle. Regular crop-health monitoring and timely nutrient and water management are important.",
  },

  {
    name: "Sugarcane",
    season: "Annual",
    duration: "10 - 14 months",
    searchTerms: ["sugarcane", "sugar cane", "us"],
    image: "/crops/sugarcane.png",
    months: {
      0: ["preparation", "sowing"],
      1: ["growth", "irrigation"],
      2: ["growth", "fertilizer"],
      3: ["growth", "irrigation"],
      4: ["growth", "health"],
      5: ["growth", "irrigation"],
      6: ["growth", "fertilizer"],
      7: ["growth", "irrigation"],
      8: ["growth", "health"],
      9: ["growth", "irrigation"],
      10: ["harvest"],
      11: ["harvest"],
    },
    insight:
      "Sugarcane has a long crop cycle. Consistent irrigation, nutrient management and crop-health monitoring are important throughout the season.",
  },

  {
    name: "Tomato",
    season: "Rabi",
    duration: "90 - 120 days",
    searchTerms: ["tomato", "tamatar"],
    image: "/crops/tomato.png",
    months: {
      8: ["preparation"],
      9: ["sowing", "irrigation"],
      10: ["growth", "fertilizer", "irrigation"],
      11: ["flowering", "health", "irrigation"],
      0: ["harvest"],
    },
    insight:
      "Tomato requires regular irrigation and crop-health monitoring. Special attention should be given during flowering and fruit development.",
  },

  {
    name: "Potato",
    season: "Rabi",
    duration: "90 - 120 days",
    searchTerms: ["potato", "batata", "aloo"],
    image: "/crops/potato.png",
    months: {
      9: ["preparation"],
      10: ["sowing", "irrigation"],
      11: ["growth", "fertilizer", "irrigation"],
      0: ["growth", "health", "irrigation"],
      1: ["harvest"],
    },
    insight:
      "Potato is mainly grown during the Rabi season. Proper soil preparation, irrigation and disease monitoring are important for good tuber development.",
  },

  {
    name: "Onion",
    season: "Rabi",
    duration: "120 - 150 days",
    searchTerms: ["onion", "kanda", "pyaz"],
    image: "/crops/onion.png",
    months: {
      8: ["preparation"],
      9: ["sowing", "irrigation"],
      10: ["growth", "fertilizer", "irrigation"],
      11: ["growth", "health", "irrigation"],
      0: ["flowering", "health"],
      1: ["harvest"],
    },
    insight:
      "Onion requires careful irrigation and nutrient management. Avoid excessive moisture near maturity and monitor the crop for disease.",
  },

  {
    name: "Chickpea",
    season: "Rabi",
    duration: "100 - 120 days",
    searchTerms: ["chickpea", "gram", "chana", "harbhara"],
    image: "/crops/chickpea.png",
    months: {
      9: ["preparation"],
      10: ["sowing"],
      11: ["growth", "fertilizer", "irrigation"],
      0: ["growth", "health"],
      1: ["flowering", "health"],
      2: ["harvest"],
    },
    insight:
      "Chickpea is an important Rabi pulse crop. Proper sowing time, limited irrigation and crop-health monitoring support good production.",
  },

  {
    name: "Pigeon Pea",
    season: "Kharif",
    duration: "150 - 180 days",
    searchTerms: [
      "pigeon pea",
      "tur",
      "toor",
      "arhar",
      "tur dal",
      "pigeonpea",
    ],
    image: "/crops/pigeon-pea.png",
    months: {
      5: ["preparation"],
      6: ["sowing"],
      7: ["growth", "fertilizer", "health"],
      8: ["growth", "irrigation", "health"],
      9: ["flowering", "health"],
      10: ["flowering", "irrigation"],
      11: ["harvest"],
      0: ["harvest"],
    },
    insight:
      "Pigeon pea is a long-duration Kharif pulse crop. Monitor weeds, soil moisture and crop health during vegetative and flowering stages.",
  },

  {
    name: "Groundnut",
    season: "Kharif",
    duration: "100 - 130 days",
    searchTerms: ["groundnut", "peanut", "shengdana", "moongfali"],
    image: "/crops/groundnut.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "irrigation"],
      8: ["flowering", "irrigation", "health"],
      9: ["growth", "health"],
      10: ["harvest"],
    },
    insight:
      "Groundnut performs well with suitable soil moisture and good drainage. Monitoring during flowering and pod development is important.",
  },

  {
    name: "Bajra",
    season: "Kharif",
    duration: "75 - 100 days",
    searchTerms: ["bajra", "pearl millet", "millet"],
    image: "/crops/bajra.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "health"],
      8: ["flowering", "irrigation", "health"],
      9: ["harvest"],
    },
    insight:
      "Bajra is a drought-tolerant Kharif cereal. Timely sowing, weed management and moisture availability during flowering are important.",
  },

  {
    name: "Jowar",
    season: "Kharif",
    duration: "100 - 120 days",
    searchTerms: ["jowar", "sorghum", "sorghum crop"],
    image: "/crops/jowar.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "health"],
      8: ["growth", "irrigation", "health"],
      9: ["flowering", "health"],
      10: ["harvest"],
    },
    insight:
      "Jowar is commonly grown as a Kharif cereal. Maintain appropriate moisture and monitor crop health during flowering and grain development.",
  },

  {
    name: "Mustard",
    season: "Rabi",
    duration: "110 - 140 days",
    searchTerms: ["mustard", "mohri", "rai", "sarson"],
    image: "/crops/mustard.png",
    months: {
      9: ["preparation"],
      10: ["sowing", "irrigation"],
      11: ["growth", "fertilizer", "health"],
      0: ["growth", "irrigation"],
      1: ["flowering", "health"],
      2: ["harvest"],
    },
    insight:
      "Mustard is a Rabi oilseed crop. Timely sowing and careful irrigation are important, especially around flowering and seed formation.",
  },

  {
    name: "Green Gram",
    season: "Kharif",
    duration: "60 - 90 days",
    searchTerms: ["green gram", "moong", "mung bean", "mung"],
    image: "/crops/green-gram.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "health"],
      8: ["flowering", "health", "irrigation"],
      9: ["harvest"],
    },
    insight:
      "Green gram is a short-duration pulse crop. Proper moisture management and early pest and disease monitoring are important.",
  },

  {
    name: "Black Gram",
    season: "Kharif",
    duration: "70 - 100 days",
    searchTerms: ["black gram", "urad", "urd", "urad dal"],
    image: "/crops/black-gram.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "health"],
      8: ["flowering", "irrigation", "health"],
      9: ["harvest"],
    },
    insight:
      "Black gram is a short-duration pulse crop. Maintain suitable moisture and monitor the crop closely during flowering and pod formation.",
  },

  {
    name: "Chilli",
    season: "Kharif",
    duration: "150 - 180 days",
    searchTerms: ["chilli", "chili", "mirchi", "green chilli", "red chilli"],
    image: "/crops/chilli.png",
    months: {
      5: ["preparation"],
      6: ["sowing", "irrigation"],
      7: ["growth", "fertilizer", "irrigation"],
      8: ["growth", "health", "irrigation"],
      9: ["flowering", "health"],
      10: ["flowering", "irrigation"],
      11: ["harvest"],
      0: ["harvest"],
    },
    insight:
      "Chilli requires regular moisture and nutrient management. Monitoring pests and diseases is especially important during flowering and fruit development.",
  },

  {
    name: "Brinjal",
    season: "Rabi",
    duration: "120 - 150 days",
    searchTerms: ["brinjal", "eggplant", "baingan", "aubergine"],
    image: "/crops/brinjal.png",
    months: {
      8: ["preparation"],
      9: ["sowing", "irrigation"],
      10: ["growth", "fertilizer", "irrigation"],
      11: ["growth", "health"],
      0: ["flowering", "irrigation", "health"],
      1: ["harvest"],
    },
    insight:
      "Brinjal requires regular irrigation, nutrient management and pest monitoring. Crop health should be checked throughout fruit development.",
  },

  {
    name: "Cabbage",
    season: "Rabi",
    duration: "90 - 120 days",
    searchTerms: ["cabbage", "kobi", "patta gobi"],
    image: "/crops/cabbage.png",
    months: {
      8: ["preparation"],
      9: ["sowing", "irrigation"],
      10: ["growth", "fertilizer", "irrigation"],
      11: ["growth", "health"],
      0: ["health", "irrigation"],
      1: ["harvest"],
    },
    insight:
      "Cabbage grows well during cooler conditions. Regular irrigation, balanced nutrients and pest monitoring help maintain healthy heads.",
  },

  {
    name: "Carrot",
    season: "Rabi",
    duration: "70 - 100 days",
    searchTerms: ["carrot", "gajar"],
    image: "/crops/carrot.png",
    months: {
      9: ["preparation"],
      10: ["sowing", "irrigation"],
      11: ["growth", "fertilizer", "irrigation"],
      0: ["growth", "health"],
      1: ["harvest"],
    },
    insight:
      "Carrot prefers loose and well-prepared soil. Consistent moisture and good soil conditions support proper root development.",
  },

  {
    name: "Sunflower",
    season: "Summer",
    duration: "90 - 120 days",
    searchTerms: ["sunflower", "surajmukhi"],
    image: "/crops/sunflower.png",
    months: {
      0: ["preparation"],
      1: ["sowing", "irrigation"],
      2: ["growth", "fertilizer", "irrigation"],
      3: ["growth", "health", "irrigation"],
      4: ["flowering", "health", "irrigation"],
      5: ["harvest"],
    },
    insight:
      "Sunflower requires good sunlight and adequate moisture during establishment and flowering. Monitor nutrition and crop health regularly.",
  },

  {
    name: "Turmeric",
    season: "Kharif",
    duration: "7 - 9 months",
    searchTerms: ["turmeric", "haldi"],
    image: "/crops/turmeric.png",
    months: {
      3: ["preparation"],
      4: ["sowing", "irrigation"],
      5: ["growth", "irrigation"],
      6: ["growth", "fertilizer", "health"],
      7: ["growth", "irrigation"],
      8: ["growth", "health"],
      9: ["growth", "irrigation"],
      10: ["harvest"],
      11: ["harvest"],
    },
    insight:
      "Turmeric is a long-duration crop requiring suitable moisture, nutrient management and weed control throughout its growing period.",
  },

  {
    name: "Banana",
    season: "Annual",
    duration: "10 - 14 months",
    searchTerms: ["banana", "kele", "kela"],
    image: "/crops/banana.png",
    months: {
      0: ["preparation", "sowing"],
      1: ["growth", "irrigation"],
      2: ["growth", "fertilizer"],
      3: ["growth", "irrigation"],
      4: ["growth", "health"],
      5: ["growth", "irrigation"],
      6: ["growth", "fertilizer"],
      7: ["growth", "irrigation"],
      8: ["flowering", "health"],
      9: ["flowering", "irrigation"],
      10: ["harvest"],
      11: ["harvest"],
    },
    insight:
      "Banana is a long-duration crop that requires regular irrigation and nutrient management. Monitor plant health and flowering carefully.",
  },
];

/*
  Month index reference:

  0  = January
  1  = February
  2  = March
  3  = April
  4  = May
  5  = June
  6  = July
  7  = August
  8  = September
  9  = October
  10 = November
  11 = December
*/