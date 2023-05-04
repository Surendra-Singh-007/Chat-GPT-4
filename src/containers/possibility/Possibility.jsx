import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          Who will control the future of this amazing technology?
        </h1>
        <p>
        What’s more, he says, in the longer term, the way the AI models can make researchers like himself more productive has the potential to drive technological progress.That potential of large language models is already turning up in research in the physical sciences.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
      <div className="gpt4__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    </div>
  );
};

export default Possibility;
