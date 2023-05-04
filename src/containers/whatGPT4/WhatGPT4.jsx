import React from "react";
import "./whatGPT4.css";
import { Feature } from "../../components";

const WhatGPT4 = () => {
  return (
    <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
      <div className="gpt4__whatgpt4-feature">
        <Feature title="What is GPT-4" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="gpt4__whatgpt4-heading">
        <h1 className="gradient__text">
          Let's Learn how to work with GPT-4 model
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt4__whatgpt4-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />
      </div>
    </div>
  );
};

export default WhatGPT4;
