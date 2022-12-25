import React from "react";
import "../style/SolarRoof/SolarRoof.scss";

import carForwardHome from "../images/Solar-Roof-car-forward-homel.webp";
import carForwardHomeHorizon from "../images/Solar-Roof-car-forward-home-horizontal.webp";
import whiteBackground from "../images/solarRoof-Inverter-white-background.avif";
import phoneImg from "../images/Solar-Roof-Phones.jpg";
import carForwardHome2 from "../images/Solar-Roof-carforward-home2.webp";
import panelImg from "../images/Solar-Roof-PanelMeasure.avif";

import hammersVideo from "../videos/hammers.mp4";
import videoGrid2 from "../videos/Carousel-solarRoof-1.mp4";
import videoGrid3 from "../videos/Carousel-solarRoof-2.webm";
import videoGrid4 from "../videos/Carousel-solarRoof-3.webm";

import FirstContent from "../components/FirstContent";
import Performance from "../components/modelSComponents/Performance";
import Plaid from "../components/modelSComponents/Plaid";
import SafetyCar from "../components/modelSComponents/SafetyCar";
import VideoAndRange from "../components/modelSComponents/VideoAndRange";
import Tabs from "../components/modelSComponents/Tabs";
import PanelMeasure from "../components/solarRoof/PanelMeasure";


const SolarRoof = () => {
  return (
    <div className="all-solarRoof">
      <FirstContent
        background="solarRoof"
        title="Solar Roof"
        desc="Transform your roof and produce clean energy"
        num1="396mi"
        num2="25-Year"
        num3="24/7"
        info1="Beautiful Solar"
        info2="Tile Warranty*"
        info3="Outage Protection"
        color={false}
        dataFour={false}
      />
      <Performance img={carForwardHome} content={false} />
      <Plaid
        name="Design"
        title="Complement Your Home’s Aesthetic"
        para="Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Schedule a virtual consultation with an Energy Advisor to learn more."
        existBtn={false}
      />
      <SafetyCar
        img={carForwardHomeHorizon}
        name="Safety"
        title="Built for Safety"
        para="Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
      />
      <VideoAndRange
        videoRange={hammersVideo}
        existData={false}
        name="Durability"
        title="Take on the Elements"
        para="Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come."
      />
      <Plaid
        name="Design"
        title="Complement Your Home’s Aesthetic"
        para="Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Schedule a virtual consultation with an Energy Advisor to learn more."
        existBtn={false}
      />
      <Tabs
        count="four"
        video1={videoGrid2}
        video2={videoGrid3}
        video3={videoGrid4}
        video4={videoGrid2}
        tabTitle3="Design"
        tabTitle4="Installation"
        tabTitle5="Power On"
        tabTitle6="AutoPark"
        tabPara3="Aerial imagery and 3D modeling determine your custom design"
        tabPara4="Our integrated design enables quick tile and Powerwall installation"
        tabPara5="Final cleanup is completed before system activation"
        tabPara6="Parallel and perpendicular parking with a single touch"
      />
      <SafetyCar
        img={whiteBackground}
        name="Safety"
        title="Built for Safety"
        para="Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack that enable exceptional occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost."
        existBtn={false}
      />
      <Performance img={phoneImg} content={false} />
      <Plaid
        name="Control"
        title="Monitor and Optimize"
        para="With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access."
        existBtn={false}
      />
      <SafetyCar
        img={carForwardHome2}
        name="Value"
        title="Pay Less for Electricity"
        para="Solar Roof helps pay for itself with the energy it produces. As a fully integrated system, Solar Roof can maximize your solar generation and help you take control of your monthly electricity bill."
      />
      <PanelMeasure
        panelImg={panelImg}
        title="Roof"
        name1="Tile and Power"
        name1B="Warranty"
        name2="Solar Glass Tiles"
        name3="Steel Tiles"
        name4="Wind Rating"
        name5="Fire Rating"
        name6="Hail Rating"
        name7="Roof Pitch"
        info1="25 years"
        info2="72 W"
        info3="Corrosion and"
        info3B="weather resistant"
        info4="Class F (highest"
        info4B="rating)"
        info5="Class 3"
        info6="≥ 2:12"
        info7="Class A (highest rating)"
      />
    </div>
  );
};

export default SolarRoof;
