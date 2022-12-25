import React from "react";
import "../style/modelX/ModelX.scss";

import imgGrid1 from "../images/grid-1.jfif";
import imgGrid2 from "../images/Grid-White-Horizontal.jpg";
import performanceImg from "../images/Model-X-Performance.jpg";
import imgTab1 from "../images/model-s-motor_carousel-new.jfif";
import imgTab2 from "../images/Model-S-Safety-Hero.jfif";
import blueCarCycle from "../images/Model-X-blue-sycle.jpg";
import exteriorImg from "../images/Model-X-black-white-car.jpg";
import imgGrid3 from "../images/Model-X-Grid-White-1.jpg";
import imgGrid4 from "../images/Model-X-Grid-White-2.jpg";
import imgGrid5 from "../images/Model-X-Grid-White-3.jpg";
import blueRangeCar from '../images/Model-X-Range-two.jpg'
import safetyImg from "../images/Model-S-Safety-Hero.jfif";
import blackCar from "../images/Model-X-Order-Black-bottom.jpg";

import videoGrid2 from "../videos/summon.mp4";
import videoGrid3 from "../videos/Navigate.mp4";
import videoGrid4 from "../videos/parking.mp4";
import videoGrid5 from "../videos/Navigate.mp4";

import FirstContent from "../components/FirstContent";
import Future from "../components/modelSComponents/Future";
import OnlyBackground from "../components/modelSComponents/OnlyBackground";
import ExperienceCarousel from "../components/modelSComponents/ExperienceCarousel";
import Grid from "../components/Grid";
import Plaid from "../components/modelSComponents/Plaid";
import Performance from "../components/modelSComponents/Performance";
import Electric from "../components/modelSComponents/Electric";
import Tabs from "../components/modelSComponents/Tabs";
import BlackContent from "../components/modelSComponents/BlackContent";
import PlaidAndRangeRightOrLeft from "../components/modelXComponents/PlaidAndRangeRightOrLeft";
import SafetyCar from "../components/modelSComponents/SafetyCar";
import Autopilot from "../components/modelSComponents/Autopilot";
import Features from "../components/modelSComponents/Features";
import Spaces from "../components/modelSComponents/Spaces";
import BottomWhiteCar from "../components/modelSComponents/BottomWhiteCar";
import MoreParagraphBottom from "../components/MoreParagraphBottom";
import Footer from "../components/Footer";

const ModelX = () => {
  return (
    <div className="all-modelX">
      <FirstContent
        background="modelX"
        title="Model X"
        desc="Plaid"
        num1="333mi"
        num2="2.5s"
        num3="9.9s"
        num4="1,020hp"
        info1="Range (EPA est.)"
        info2="0-60 mph*"
        info3="1/4 Mile"
        info4="Peak Power"
      />
      <Future content="Interior of the Future" />
      <OnlyBackground />
      <ExperienceCarousel />
      <Grid
        title1="Stay Connected"
        title2="Room for Everything"
        desc1="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
        desc2="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
        img1={imgGrid1}
        img2={imgGrid2}
        video={false}
        exist={false}
      />
      <Performance
        img={performanceImg}
        title1="1,020hp"
        title2="9.23s"
        title3="1.99s"
        desc1="Peak Power"
        desc2="@155 mph 1/4 mile"
        desc3="P0-60 mph*"
      />
      <Plaid
        name="Plaid"
        title="Beyond Ludicrous"
        para="With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model X or schedule a Test Drive today."
      />
      <Electric
        para="Model S platforms unite powertrain and battery technologies for
          unrivaled performance, range and efficiency. New module and pack
          thermal architecture allows faster charging and gives you more power
          and endurance in all conditions."
        title="Electric Powertrain"
      />
      <Tabs
        img1={imgTab1}
        img2={imgTab2}
        tabTitle1="Model X"
        tabPara1="Dual Motor All-Wheel Drive unlocks more range than any other
                  vehicle in our current lineup, with insane power and maximum
                  control."
        tabTitle2="Model X Plaid"
        tabPara2="Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors."
        titleBadge1="3.8 s"
        titleBadge2="348 mi"
        titleBadge3="670 hp"
        titleBadge4="2.5 s*"
        titleBadge5="333 mi"
        titleBadge6="1,020 hp"
        descBadge1="0-60 mph"
        descBadge2="Range (EPA est.)"
        descBadge3="Peak Power"
        descBadge4="0-60 mph"
        descBadge5="Range (EPA est.)"
        descBadge6="Peak Power"
      />
      <PlaidAndRangeRightOrLeft
        img={blueCarCycle}
        title1="92ft³"
        title2="5,000lbs"
        title3="1,020hp"
        desc1="Up to 92 ft³ of storage"
        desc2="Tow up to 5,000 lbs"
        desc3="Falcon Wing Doors"
        rangeName="Utility"
        rangePara="With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go."
        rangeTitle="Even More Capable"
      />
      <Performance img={exteriorImg} content={false} />
      <BlackContent
        namePlaid="Exterior"
        titlePlaid="Designed for Efficiency"
        paraPlaid="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
        titleGrid1="Relentless Performance"
        titleGrid2="Optimized Aerodynamics"
        titleGrid3="Refined Styling"
        descGrid1="Performance wheels and tires keep the SUV planted, transferring even more power down to the road."
        descGrid2="Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth."
        descGrid3="Exterior design combines an iconic look with elegant details."
        img1={imgGrid3}
        img2={imgGrid4}
        img3={imgGrid5}
      />
      <PlaidAndRangeRightOrLeft
        img={blueRangeCar}
        title1="348mi"
        title2="15min"
        title3="40,000+"
        desc1="Go anywhere with up to 348 miles of estimated range on a single charge"
        desc2="Recharge up to 175 miles in 15 minutes with the latest Supercharger technology"
        desc3="Superchargers placed along popular routes"
        rangeName="Range"
        rangeTitle="Go Anywhere"
        rangePara="With up to 348 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today."
        imgPosition={false}
      />
      <SafetyCar
        img={safetyImg}
        name="Safety"
        title="Built for Safety"
        para="Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
      />
      <Autopilot />
      <Plaid
        name="Autopilot"
        title="Future of Driving"
        para="Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly. Chat with a Tesla Advisor to learn more about Model S or schedule a Test Drive today."
      />
      <Features
        title="Features"
        para="Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:"
      />
      <Tabs
        count="four"
        video1={videoGrid2}
        video2={videoGrid3}
        video3={videoGrid4}
        video4={videoGrid5}
        tabTitle3="Autopilot"
        tabTitle4="Auto Lane Change"
        tabTitle5="Summon"
        tabTitle6="AutoPark"
        tabPara3="Active guidance from on-ramp to off-ramp"
        tabPara4="Automatically change lanes while driving on the highway"
        tabPara5="Automatically retrieve your car"
        tabPara6="Parallel and perpendicular parking with a single touch"
      />
      <Spaces model="Model X" />
      <BottomWhiteCar title="Model X" img={blackCar} />
      <MoreParagraphBottom
        content="Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. "
        conLink="Learn more about Standard Connectivity and any limitations."
      />
      <Footer />
    </div>
  );
};

export default ModelX;
