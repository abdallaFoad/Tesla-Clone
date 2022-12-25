import React from "react";
import "../style/ModelS.scss";

import performanceImg from "../images/Model-S-Performance-LHD.jfif";
import imgTab1 from "../images/model-s-motor_carousel-new.jfif";
import imgTab2 from "../images/Model-S-Safety-Hero.jfif";
import exteriorImg from "../images/Model-S-Exteriorl.jfif";
import imgGrid1 from "../images/grid-1.jfif";
import imgGrid2 from "../images/grid-2.jfif";
import whiteCar from "../images/Model-S-white.jpg";
import imgGrid3 from "../images/Model-S-blackContent-Grid-1.jfif";
import imgGrid4 from "../images/Model-S-blackContent-Grid-2.jfif";
import imgGrid5 from "../images/Model-S-blackContent-Grid-3.jfif";
import safetyImg from "../images/Model-S-Safety-Hero.jfif";

import videoGrid1 from "../videos/gridVideo.mp4";
import videoGrid2 from "../videos/summon.mp4";
import videoGrid3 from "../videos/Navigate.mp4";
import videoGrid4 from "../videos/parking.mp4";
import videoGrid5 from "../videos/Navigate.mp4";
import videoBackground from "../videos/Plaid-Range-Web-Desktop-8mb.mp4";

import FirstContent from "../components/FirstContent";
import Future from "../components/modelSComponents/Future";
import OnlyBackground from "../components/modelSComponents/OnlyBackground";
import ExperienceCarousel from "../components/modelSComponents/ExperienceCarousel";
import Grid from "../components/Grid";
import Performance from "../components/modelSComponents/Performance";
import Plaid from "../components/modelSComponents/Plaid";
import Electric from "../components/modelSComponents/Electric";
import Tabs from "../components/modelSComponents/Tabs";
import BlackContent from "../components/modelSComponents/BlackContent";
import VideoAndRange from "../components/modelSComponents/VideoAndRange";
import SafetyCar from "../components/modelSComponents/SafetyCar";
import Autopilot from "../components/modelSComponents/Autopilot";
import Features from "../components/modelSComponents/Features";
import Spaces from "../components/modelSComponents/Spaces";
import BottomWhiteCar from "../components/modelSComponents/BottomWhiteCar";
import Footer from "../components/Footer";
import MoreParagraphBottom from "../components/MoreParagraphBottom";

const ModelS = () => {
  return (
    <>
      <div className="all-modelS">
        <FirstContent
          background="modelS"
          title="Model S"
          desc="Plaid"
          num1="396mi"
          num2="1.99s"
          num3="200mph"
          num4="1,020hp"
          info1="Range (EPA est.)"
          info2="0-60 mph*"
          info3="Top Speed"
          info4="Peak Power"
        />
        <Future content="Interior of the Future" />
        <OnlyBackground />
        <ExperienceCarousel />
        <Grid
          title1="Stay Connected"
          title2="Immersive Sound"
          title3="Room for Everything"
          desc1="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          desc2="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."
          desc3="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
          img1={imgGrid1}
          img2={imgGrid2}
          img3={videoGrid1}
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
          para="Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a Test Drive today."
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
          tabTitle1="Model S"
          tabPara1="Dual Motor All-Wheel Drive unlocks more range than any other
                  vehicle in our current lineup, with insane power and maximum
                  control."
          tabTitle2="Model S Plaid"
          tabPara2="Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors."
          titleBadge1="3.1 s"
          titleBadge2="405 mi"
          titleBadge3="670 hp"
          titleBadge4="1.99 s*"
          titleBadge5="396 mi"
          titleBadge6="1,020 hp"
          descBadge1="0-60 mph"
          descBadge2="Range (EPA est.)"
          descBadge3="Peak Power"
          descBadge4="0-60 mph"
          descBadge5="Range (EPA est.)"
          descBadge6="Peak Power"
        />
        <Performance img={exteriorImg} content={false} />
        <BlackContent
          namePlaid="Exterior"
          titlePlaid="Designed for Efficiency"
          paraPlaid="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
          titleGrid1="Stay Connected"
          titleGrid2="Immersive Sound"
          titleGrid3="Room for Everything"
          descGrid1="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
          descGrid2="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."
          descGrid3="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
          img1={imgGrid3}
          img2={imgGrid4}
          img3={imgGrid5}
        />
        <VideoAndRange
          videoRange={videoBackground}
          name="Autopilot"
          title="Future of Driving"
          para="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
        />
        <SafetyCar
          img={safetyImg}
          name="Safety"
          para="Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
          title="High Impact Protection"
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
        <Spaces model="Model S" />
        <BottomWhiteCar title="Model S" img={whiteCar} />
        <MoreParagraphBottom
          content="Certain high data usage vehicle features require at least Standard Connectivity, including maps, navigation and voice commands. Access to features that use cellular data and third-party licenses are subject to change. "
          conLink="Learn more about Standard Connectivity and any limitations."
        />
        <Footer />
      </div>
    </>
  );
};

export default ModelS;
