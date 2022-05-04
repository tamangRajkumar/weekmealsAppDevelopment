import { Images } from "./images";

const walkThroughList = [
  {
    id: 1,
    title: "Welkom!",
    discription:
      "WeekMeals helpt je op een leuke manier gezonder te leven en te eten. Swipe om verder te gaan.",
    image: Images.weekMealsLogo,
  },
  {
    id: 2,
    title: "Recepten op maat",
    discription:
      "Recepten in de app worden automatisch aangepast op jouw voedingsplan– lekker & makkelijk.",
    image: Images.onBoardingIcon1,
  },
  {
    id: 3,
    title: "Gebaseerd op wetenschap",
    discription:
      "De recepten en het voedingsadvies van WeekMeals zijn gebasseerd op wetenschappelijk onderzoek.",
    image: Images.onBoardingIcon2,
  },
  {
    id: 4,
    title: "Weekplanner",
    discription: "Het inplannen van je week verhoogt jouw kans op succes",
    image: Images.onBoardingIcon3,
  },
  {
    id: 5,
    title: "Boodschappenlijstjes",
    discription:
      "Maak met je geplande maaltijden in no-time een boodschappenlijstje. Nooit meer peinzen bij de super!",
    image: Images.onBoardingIcon4,
    button: true,
  },
];

const foodList = [
  { id: 1, title: "Vegetarisch" },
  { id: 2, title: "Veganistisch" },
  { id: 3, title: "Pescotarisch" },
];

const yourPlanList = [
  {
    id: 1,
    title: "Leeftijd",
    answer: "35 jaar",
  },

  {
    id: 3,
    title: "Gewicht",
    answer: "70 kilogram",
  },
  {
    id: 4,
    title: "70 kilogram ",
    answer: "35 jaar",
  },
  {
    id: 5,
    title: "Vetpercentage ",
    answer: "15%",
  },

  {
    id: 7,
    title: "Levenstijl ",
    answer: "Licht actief",
  },
];

const selectFoodList = [
  {
    id: 1,
    image: Images.food1,
    title: "Work",
  },
  {
    id: 2,
    image: Images.food2,
    title: "Pasta",
  },
  {
    id: 3,
    image: Images.food3,
    title: "Vis",
  },
  {
    id: 4,
    image: Images.food4,
    title: "Indonesisch",
  },
  {
    id: 5,
    image: Images.food5,
    title: "Indiaas",
  },
  {
    id: 6,
    image: Images.food6,
    title: "Salade",
  },
];

const mealPlanList = [
  {
    title: "Ontbijt",
    data: [716, 27, 18, 33],
  },
  {
    title: "Lunch",
    data: [716, 27, 18, 33],
  },
  {
    title: "Avondeten",
    data: [716, 27, 18, 33],
  },
];




export {
  walkThroughList,
  foodList,
  yourPlanList,
  selectFoodList,
  mealPlanList,
};
