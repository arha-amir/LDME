import GrilledCheeseSandwich from "../images/GrilledCheeseSandwich.jpg";
import BeefSandwich from "../images/BeefSandwich.jpg";
import DoubleSandwich from "../images/DoubleSandwich.jpg";
import ChipAndDip from "../images/ChipAndDip.jpg";
import MozerellaSticks from "../images/MozerellaSticks.jpg";
import BreakfastSandwich from "../images/BreakfastSandwich.jpg";
import Nachos from "../images/Nachos.jpg";
import Special from "../images/Special.jpg";
const SavoryDetails = [
    {
      title: "Grilled Sandwich",
      price: 400,
      productionTime: "9:00",
      time: "am",
      pic: GrilledCheeseSandwich,
      text: "The cheesy grilled goodness packed in crispy toast.",
    },
    {
      title: "Beef Sandwich",
      price: 700,
      productionTime: "9:20",
      time: "am",
      pic: BeefSandwich,
      text: "Grilled beef sandwich with creme fresh, Bar B.Q sauce and jalepenos.",
    },
    {
      title: "Double Sandwich",
      price: 800,
      productionTime: "6:00",
      time: "am",
      pic: DoubleSandwich,
      text: "The ultimate stacked chicken sandwich to satify the scrumptious hunger.",
    },
    
    {
        title: "Breakfast Sandwich",
        price: 200,
        productionTime: "5:30",
        time: "am",
        pic: BreakfastSandwich,
        text: "A light fluffy but cheese filled goodness covered with crispy panko.",
      },
      {
        title: "Chips and Dip",
        price: 350,
        productionTime: "8:00",
        time: "am",
        pic: ChipAndDip,
        text: "The lovely combo of curly fries and spicy cheese strings served with our special sauce.",
      },
      {
        title: "Mozerella Sticks",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: MozerellaSticks,
        text: "A light fluffy but cheese filled goodness covered with crispy panko.",
      },
      {
        title: "Nachos",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: Nachos,
        text: "Crisp tortilla chips covered with melted cheesy goodness and chillies.",
      },
      {
        title: "Special Platter",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: Special,
        text: "A light fluffy but cheese filled goodness covered with crispy panko.",
      },

  ];
  
  export function getSavory() {
    return SavoryDetails;
  }
  