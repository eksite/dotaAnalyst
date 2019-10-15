import React from "react";

const Hero = props => {
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <img src={composeLink(props.name)} />
      </div>
    </>
  );
};

const composeLink = longName => {
  let shortName = longName.slice(14);
  return `https://api.opendota.com/apps/dota2/images/heroes/${shortName}_full.png`;
};

export default Hero;
