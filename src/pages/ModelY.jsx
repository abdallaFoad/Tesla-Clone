import React from "react";
import "../style/modelY/modelY.scss";

import safetyImg from "../images/Model-S-Safety-Hero.jfif";
import carouselImg1 from "../images/Model-Y-Grid1-1.jpg";
import carouselImg2 from "../images/Model-Y-Grid1-12jpg.jpg";
import performanceImg from "../images/Model-Y-Red-Performance.jpg";
import internalCar from "../images/Model-Y-internal-white-car.jpg";
import blackCar from "../images/Model-Y-black-car.jpg";

import videoBackground from "../videos/Plaid-Range-Web-Desktop-8mb.mp4";

import FirstContent from "../components/FirstContent";
import SafetyCar from "../components/modelSComponents/SafetyCar";
import Plaid from "../components/modelSComponents/Plaid";
import CarouselTwoContent from "../components/modelYComponents/CarouselTwoContent";
import Performance from "../components/modelSComponents/Performance";
import Autopilot from "../components/modelSComponents/Autopilot";
import VideoAndRange from "../components/modelSComponents/VideoAndRange";
import Spaces from "../components/modelSComponents/Spaces";
import BottomWhiteCar from "../components/modelSComponents/BottomWhiteCar";
import MoreParagraphBottom from "../components/MoreParagraphBottom";
import Footer from "../components/Footer";

const ModelY = () => {
  return (
    <div className="all-modelY">
      <FirstContent
        background="modelY"
        title="Model Y"
        desc="Schedule a Demo Drive"
        num1="76cu ft"
        num2="330mi"
        num3="AWD"
        info1="Cargo Space"
        info2="Range (EPA est.)*"
        info3="1/4 Mile"
        dataFour={false}
        color={false}
      />
      <SafetyCar
        img={safetyImg}
        name="Safety"
        title="Built for Safety"
        para="Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
      />
      <Plaid
        name="Utility"
        title="A Place For Everything"
        para="Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today."
      />
      <CarouselTwoContent
        img1={carouselImg1}
        img2={carouselImg2}
        desc1="Room for up to seven with optional third row"
        desc2="Versatile seating and storage for cargo and passengers"
      />
      <Autopilot />
      <Performance
        img={performanceImg}
        title1="2"
        title2="3.5s"
        title3="1.99s"
        desc1="Independent motors digitally control torque to the front and rear wheels"
        desc2="Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds"
        desc3="Capable in rain, snow, mud and off-road with superior traction control"
      />
      <Plaid
        name="All-Wheel Drive"
        title="Dual Motor"
        para="Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road."
      />
      <VideoAndRange
        videoRange={videoBackground}
        name="Range"
        title="Go Anywhere"
        para="With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S or schedule a Test Drive today."
      />
      <Plaid
        name="Autopilot"
        title="Future of Driving"
        para="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
      />
      <Performance img={internalCar} content={false} />
      <Plaid
        name="Interior"
        title="Built Around the Driver"
        para="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."
      />
      <Spaces model="Model Y" />
      <BottomWhiteCar title="Model Y" img={blackCar} />
      <MoreParagraphBottom
        content="Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. "
        conLink="Learn more about Standard Connectivity and any limitations."
      />
      <Footer />
    </div>
  );
};

export default ModelY;
