import LotusCake from "../images/LotusCake.jpg";
import StrawberryCake from "../images/StrawberryCake.jpg";
import ChocolateCake from "../images/ChocolateCake.jpg";
import LemonCake from "../images/LemonCake.jpg";
import RainbowCake from "../images/RainbowCake.jpg";
const CakeDetails = [
  {
    title: "Lotus Cake",
    price: 1200,
    productionTime: "8:00",
    time: "am",
    pic: LotusCake,
    text: "The ultimate cake for Biscoff lovers. Two layers of Biscoff sponge (which is made with both crushed Biscoff biscuits and Biscoff spread), sandwiched together with Biscoff buttercream and topped with Biscoff biscuits",
  },
  {
    title: "Strawberry Cake",
    price: 900,
    productionTime: "9:20",
    time: "am",
    pic: StrawberryCake, 
    text: "The ultimate cake for Biscoff lovers. Two layers of Biscoff sponge (which is made with both crushed Biscoff biscuits and Biscoff spread), sandwiched together with Biscoff buttercream and topped with Biscoff biscuits",
  },
  {
    title: "Chocolate Cake",
    price: 500,
    productionTime: "6:00",
    time: "am",
    pic: ChocolateCake,
    text: "The ultimate cake for Biscoff lovers. Two layers of Biscoff sponge (which is made with both crushed Biscoff biscuits and Biscoff spread), sandwiched together with Biscoff buttercream and topped with Biscoff biscuits",
  },
  {
    title: "Lemon Cake",
    price: 500,
    productionTime: "6:00",
    time: "am",
    pic: LemonCake,
    text: "The ultimate cake for tang lovers. Two layers of lemon sponge (which is made with both lemon zest ), sandwiched together with lemon buttercream and topped with lemon meringue ",
  },
  {
    title: "Rainbow Cake",
    price: 700,
    productionTime: "5:30",
    time: "am",
    pic: RainbowCake,
    text: "A stunning celebration cake of six or seven colourful layers and a soft cheese icing with all the beautiful pastel colors which fills the day with light fluff",
  },
];

export function getCakes() {
  return CakeDetails;
}
