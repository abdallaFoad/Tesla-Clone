import React from "react";

import performanceImg from "../images/Model-3-ice-car-Performance.jpg";
import introPerformance from "../images/Model-3-Interior.jpg";
import AWDBlueCar from "../images/Model-3-AWD-blue-car.jpg";
import bottomWhite from "../images/Model-3-bottom-red.jpg";
import redCar from "../images/Model-3-Range-red.jpg";

import FirstContent from "../components/FirstContent";
import SafetyCar3 from "../components/model3Components/SafetyCar3";
import Performance from "../components/modelSComponents/Performance";
import RangeVertical from "../components/model3Components/RangeVertical";
import Plaid from "../components/modelSComponents/Plaid";
import PlaidAndRange from "../components/model3Components/PlaidAndRange";
import Autopilot from "../components/modelSComponents/Autopilot";
import Spaces from "../components/modelSComponents/Spaces";
import BottomWhiteCar from "../components/modelSComponents/BottomWhiteCar";

import "../style/model3/Model3.scss";
import MoreParagraphBottom from "../components/MoreParagraphBottom";
import Footer from "../components/Footer";

const Model3 = () => {
  return (
    <div className="all-model3">
      <FirstContent
        background="model3"
        title="Model 3"
        desc="Schedule a Test Drive"
        num1="3.1i"
        num2="358mi"
        num3="AWD"
        info1="0-60 mph*"
        info2="Range (EPA est.)"
        info3="Dual Motor"
        dataFour={false}
        color={false}
      />
      <SafetyCar3 />
      <Performance
        img={performanceImg}
        title1="3.1s"
        title2="162mph"
        title3="AWD"
        desc1="Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds"
        desc2="Improved handling and aerodynamics allow for a top speed of 162 mph"
        desc3="Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions"
      />
      <RangeVertical
        name="Performance"
        title="Quickest Acceleration"
        para="Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a Test Drive today."
      />
      <Performance
        img={AWDBlueCar}
        title1="358mi"
        title2="15 min"
        title3="40,000+"
        desc1="Go anywhere with up to 358 mi of estimated range on a single charge"
        desc2="Recharge up to 175 mi in 15 minutes at Supercharger locations"
        desc3="Superchargers placed along well-traveled routes around the world"
      />
      <Plaid
        name="All-Wheel Drive"
        title="Dual Motor"
        para="Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control."
      />
      <PlaidAndRange
        redCar={redCar}
        title1="2"
        title2="10 ms"
        title3="AWD"
        desc1="Independent motors digitally control torque to the front and rear wheels"
        desc2="Dual motors respond to changing conditions in as little as 10 milliseconds"
        desc3="Unparalleled traction and control, in all weather conditions"
        nameRange="Range"
        titleRange="Go Anywhere"
        paraRange="Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model 3 or schedule a Test Drive today."
      />
      <Autopilot />
      <RangeVertical
        name="Autopilot"
        title="Future of Driving"
        para="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Chat with a Tesla Advisor to learn more about Model 3 or schedule a Test Drive today."
      />
      <Performance img={introPerformance} content={false} />
      <RangeVertical
        name="Interior"
        title="Built Around the Driver"
        para="The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat."
      />
      <Spaces model="Model 3" />
      <BottomWhiteCar img={bottomWhite} title="Experience Model 3" />
      <MoreParagraphBottom
        content="Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change."
        conLink="Learn more about Standard Connectivity and any limitations."
      />
      <Footer />
    </div>
  );
};

export default Model3;
