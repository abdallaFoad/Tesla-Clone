import React from "react";

import videoBackground from '../videos/Roofs-Home-Tree.mp4';
import redCar from "../images/Model-3-Range-red.jpg";
import internalCar from '../images/Solar-Planels-Inverter-jpg.jpg'
import whiteBackground from "../images/solarRoof-Inverter-white-background.avif";
import phoneImg from "../images/Solar-Roof-Phones.jpg";
import panelImg from '../images/Solar-Panels-Specs-Labtop-.jpg'

import videoPanels from '../videos/solar-assessment-desktop.mp4'

import FirstContent from "../components/FirstContent";
import VideoAndRange from "../components/modelSComponents/VideoAndRange";
import PlaidAndRange from "../components/model3Components/PlaidAndRange";
import Performance from "../components/modelSComponents/Performance";
import Plaid from "../components/modelSComponents/Plaid";
import OnlyVideo from "../components/OnlyVideo";
import SafetyCar from "../components/modelSComponents/SafetyCar";
import PanelMeasure from "../components/solarRoof/PanelMeasure";

const SolarPanels = () => {
  return (
    <div className="all-panels">
      <FirstContent
        background="solarPanels"
        title="Solar for Existing Roofs"
        desc="Lowest Cost Solar Panels in America—Money-back guarantee"
        num1="396mi"
        num2="$"
        num3="24/7"
        info1="Convert Sunlight to Energy"
        info2="Guaranteed Lowest Price for Solar"
        info3="Energy Monitoring"
        dataFour={false}
      />
      <VideoAndRange
        videoRange={videoBackground}
        name="Savings"
        title="Electricity For Less"
        para="Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Schedule a virtual consultation with an Energy Advisor to learn more."
        existData={false}
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
        content={false}
        padding={false}
      />
      <Performance img={internalCar} content={false} />
      <Plaid
        name="Power wall"
        title="Home Battery Backup"
        para="Your Power wall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage."
      />
      <OnlyVideo video={videoPanels} />
      <Plaid
        name="Power On"
        title="Order and Installation"
        para="From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with an Energy Advisor or request a call to learn more."
        existBtn={false}
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
        name="Experience"
        title="24/7 Monitoring"
        para="Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence."
        existBtn={false}
      />
      <PanelMeasure
        panelImg={panelImg}
        title="Panel"
        name1="Wattage"
        name2="Operating Temperature"
        name3="Dimensions"
        name4="Design"
        name5="Warranty"
        name6="Certifications"
        name7="Inverter Power"
        info1="400 W"
        info2="-40°F up to +185°F"
        info3="74.4' x 41.2' x 1.57'"
        info3B="(including frame)"
        info4="Black anodized aluminum"
        info4B="alloy frame"
        info5="25-year performance"
        info6="IEC / UL 61730,"
        info7="3.8kW / 7.6kW
97.5% efficiency"
      />
    </div>
  );
};

export default SolarPanels;
