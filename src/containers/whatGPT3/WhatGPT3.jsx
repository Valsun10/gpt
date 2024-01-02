import React from "react";
import "./WhatGPT3.css";
import Feature from "./../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="what-gpt3 section__margin">
      <div className="what-gpt3-feature">
        <div className="feature-title">
          <div className="line" />
          <h1>What is GPT-3</h1>
        </div>
        <div className="feature-info">
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
      </div>

      <div className="what-gpt3-title">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <h4 style={{ color: "#FF8A71" }}>Explore The Library</h4>
      </div>
      <div className="what-gpt3-features-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
