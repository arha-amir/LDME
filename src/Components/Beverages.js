import React from "react";
import BeveragesCard from "./BeveragesCard";
import IcedMocca from "../images/IcedMocca.jpg";
import Cappuccino from "../images/Cappuccino.jpg";
import Expresso from "../images/Expresso.jpg";
import Coffee from "../images/Coffee.jpg";
class Beverages extends React.Component {
  state = {
    beverages: [
      {
        title: "Cappuccino",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: Cappuccino ,
        text: "Crisp tortilla chips covered with melted cheesy goodness and chillies.",
      },
      {
        title: "Iced Mocca",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: IcedMocca,
        text: "Crisp tortilla chips covered with melted cheesy goodness and chillies.",
      },
      ,
      {
        title: "Expresso",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: Expresso ,
        text: "Creisp tortilla chips covered with melted cheesy goodness and chillies.",
      },
      {
        title: "coffee",
        price: 700,
        productionTime: "5:30",
        time: "am",
        pic: Coffee,
        text: "Creisp tortilla chips covered with melted cheesy goodness and chillies.",
      },
    ],
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.beverages.map((b) => (
            <BeveragesCard
              pic={b.pic}
              title={b.title}
              price={b.price}
              text={b.text}
              time={b.time}
              productionTime={b.productionTime}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Beverages;
