import React from "react";
import SectionLayout from "./SectionLayout";
import { prizeConfig } from "../config/prize2";
import Lottie from "react-lottie-player";

const PrizeCard = ({ pid, lotty, data, pname }) => {
  return (
    <div id={pid} className={`prize-card`}>
      <Lottie play loop animationData={pname} className={`${data}`} speed={1} />
      <h1>{lotty}</h1>
    </div>
  );
};

const Prize2 = () => {
  return (
    <>

      <SectionLayout id="prize" Classname={"prize-section"}>
        <div className="prize-container">
          {prizeConfig.map((track) => (
            <PrizeCard {...track} key={track.pid} />
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default Prize2;