import React from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Section
        title="Model S"
        para="Order Online for Touchiness Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        classWrap="wrap"
        arrowColor={false}
      />
      <Section
        title="Model 3"
        para="Order Online for Touchiness Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        classWrap="wrap1"
        arrowColor={false}
      />
      <Section
        title="Model X"
        para="Order Online for Touchiness Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        classWrap="wrap2"
        arrowColor={false}
      />
      <Section
        title="Model Y"
        para="Order Online for Touchiness Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        classWrap="wrap3"
        arrowColor={false}
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        para="Money-back guarantee"
        leftButton="Order Now"
        rightButton="Learn More"
        classWrap="wrap4"
        arrowColor={false}
      />
      <Section
        title="Solar For New Roofs "
        para="Solar Roof Costs Less Than a New"
        leftButton="Order Now"
        rightButton="Learn More"
        classWrap="wrap5"
        arrowColor={false}
      />
      <Section
        title="Accessories"
        leftButton="Shop Now"
        classWrap="wrap6"
        arrowColor={true}
      />
      <div>
        {<Footer />}
      </div>
    </div>
  );
};

export default Home;
