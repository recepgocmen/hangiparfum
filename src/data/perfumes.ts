import { Perfume } from "../types/survey";

export const perfumes: Perfume[] = [
  {
    id: "mfk-br540",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    price: 1250,
    gender: "unisex",
    notes: ["saffron", "jasmine", "amber", "cedar"],
    description: "Lüks ve sofistike bir koku. Tatlı ve odunsu notalar ile öne çıkar.",
    ageRange: { min: 20, max: 25 },
    characteristics: ["sweet", "woody", "amber", "warm"],
  },
  {
    id: "mfk-oud-satin",
    name: "Oud Satin Mood",
    brand: "Maison Francis Kurkdjian",
    price: 1350,
    gender: "unisex",
    notes: ["oud", "rose", "vanilla", "benzoin"],
    description: "Zengin ve yoğun bir oryantal koku",
    ageRange: { min: 20, max: 50 },
    characteristics: ["oriental", "rich", "sweet", "woody"],
  },
  {
    id: "mfk-grand-soir",
    name: "Grand Soir",
    brand: "Maison Francis Kurkdjian",
    price: 1200,
    gender: "unisex",
    notes: ["amber", "vanilla", "benzoin", "tonka bean"],
    description: "Sıcak ve baştan çıkarıcı amber kokusu",
    ageRange: { min: 25, max: 50 },
    characteristics: ["amber", "warm", "sweet", "vanilla"],
  },
  {
    id: "tf-oud-wood-intense",
    name: "Oud Wood Intense",
    brand: "Tom Ford",
    price: 1400,
    gender: "unisex",
    notes: ["oud", "angelica", "juniper", "castoreum"],
    description: "Yoğun ve güçlü bir oud kokusu",
    ageRange: { min: 20, max: 50 },
    characteristics: ["woody", "intense", "dark", "smoky"],
  },
  {
    id: "tf-lost-cherry",
    name: "Lost Cherry",
    brand: "Tom Ford",
    price: 1300,
    gender: "unisex",
    notes: ["cherry", "almond", "tonka bean", "peru balsam"],
    description: "Tatlı ve baştan çıkarıcı kiraz kokusu",
    ageRange: { min: 20, max: 45 },
    characteristics: ["sweet", "fruity", "gourmand"],
  },
  {
    id: "tf-tobacco-vanille",
    name: "Tobacco Vanille",
    brand: "Tom Ford",
    price: 1300,
    gender: "unisex",
    notes: ["tobacco", "vanilla", "cocoa", "tonka bean"],
    description: "Sıcak ve zengin tütün-vanilya kokusu",
    ageRange: { min: 25, max: 50 },
    characteristics: ["sweet", "spicy", "warm", "tobacco"],
  },
  {
    id: "tf-bitter-peach",
    name: "Bitter Peach",
    brand: "Tom Ford",
    price: 1300,
    gender: "unisex",
    notes: ["peach", "cardamom", "rum", "vanilla"],
    description: "Tatlı-acı şeftali aroması",
    ageRange: { min: 17, max: 40 },
    characteristics: ["fruity", "sweet", "spicy"],
  },
  {
    id: "xerjoff-naxos",
    name: "Naxos",
    brand: "Xerjoff",
    price: 1500,
    gender: "unisex",
    notes: ["tobacco", "honey", "vanilla", "tonka bean"],
    description: "Zengin ve sofistike bir tütün kokusu",
    ageRange: { min: 25, max: 50 },
    characteristics: ["tobacco", "sweet", "honey", "vanilla"],
  },
  {
    id: "xerjoff-alexandria",
    name: "Alexandria II",
    brand: "Xerjoff",
    price: 1600,
    gender: "unisex",
    notes: ["oud", "vanilla", "amber", "cedar"],
    description: "Lüks ve oryantal bir koku",
    ageRange: { min: 17, max: 45 },
    characteristics: ["oriental", "woody", "rich"],
  },
  {
    id: "invictus",
    name: "Invictus",
    brand: "Paco Rabanne",
    price: 600,
    gender: "male",
    notes: ["grapefruit", "marine", "guaiac wood"],
    description: "Taze ve maskülen bir koku",
    ageRange: { min: 20, max: 35 },
    characteristics: ["fresh", "marine", "woody"],
  },
  {
    id: "chanel-chance",
    name: "Chance",
    brand: "Chanel",
    price: 900,
    gender: "female",
    notes: ["pink pepper", "jasmine", "patchouli"],
    description: "Zarif ve feminen bir koku",
    ageRange: { min: 19, max: 40 },
    characteristics: ["floral", "fresh", "spicy"],
  },
  {
    id: "lveb",
    name: "La Vie Est Belle",
    brand: "Lancome",
    price: 850,
    gender: "female",
    notes: ["iris", "patchouli", "praline", "vanilla"],
    description: "Tatlı ve feminen bir koku",
    ageRange: { min: 20, max: 45 },
    characteristics: ["sweet", "gourmand", "floral"],
  },
  {
    id: "ysl-libre",
    name: "Libre",
    brand: "Yves Saint Laurent",
    price: 800,
    gender: "female",
    notes: ["lavender", "orange blossom", "vanilla"],
    description: "Modern ve özgür bir koku",
    ageRange: { min: 20, max: 40 },
    characteristics: ["floral", "warm", "fresh"],
  },
  {
    id: "memo-african-leather",
    name: "African Leather",
    brand: "Memo",
    price: 1200,
    gender: "unisex",
    notes: ["leather", "cardamom", "saffron", "patchouli"],
    description: "Egzotik ve derili bir koku",
    ageRange: { min: 23, max: 50 },
    characteristics: ["leather", "spicy", "woody"],
  }
];
