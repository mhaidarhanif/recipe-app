export type Ingredient = string;

export type DataRecipe = {
  id: number;
  name: string;
  description: string;
  isBeginner: boolean;
  ingredients: Ingredient[];
};

export const dataRecipes: DataRecipe[] = [
  {
    id: 1,
    name: "Hot Water",
    description: "A simple recipe for hot water.",
    isBeginner: true,
    ingredients: ["water", "pan", "stove"],
  },
  {
    id: 2,
    name: "Fried Rice",
    description:
      "A classic Chinese dish made with rice, vegetables, and your choice of protein.",
    isBeginner: false,
    ingredients: ["rice", "egg", "soy sauce", "cooking oil"],
  },
  {
    id: 3,
    name: "Scrambled Egg",
    description: "A basic recipe for scrambled eggs, perfect for breakfast.",
    isBeginner: true,
    ingredients: ["eggs", "butter", "salt", "pepper"],
  },
  {
    id: 4,
    name: "Chicken Noodle",
    description:
      "A comforting soup made with chicken, noodles, and vegetables.",
    isBeginner: false,
    ingredients: ["chicken", "noodles", "carrots", "celery", "onion"],
  },
  {
    id: 5,
    name: "Indomie",
    description:
      "A popular instant noodle dish from Indonesia, easy to prepare.",
    isBeginner: true,
    ingredients: ["instant noodles", "seasoning", "boiling water"],
  },
  {
    id: 6,
    name: "Mie Sedaap",
    description:
      "Another Indonesian instant noodle dish, known for its spicy flavor.",
    isBeginner: true,
    ingredients: [
      "instant noodles",
      "seasoning",
      "boiling water",
      "chili sauce",
    ],
  },
];
