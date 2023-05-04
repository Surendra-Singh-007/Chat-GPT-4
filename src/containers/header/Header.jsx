import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-image">
        <img src={ai} alt="ai" />
      </div>
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Generative Pre-trained Transformer 4(GPT-4) model created by Open AI
        </h1>
        <p>
          It was released on March 14, 2023, and has been made publicly
          available in a limited form via the chatbot product chatGPT plus, and
          with access to the GPT-4 based version of OpenAI's API being provided
          via a waitlist
        </p>
        <div className="gpt4__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt4__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24hours</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
