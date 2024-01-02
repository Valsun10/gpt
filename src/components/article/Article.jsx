import React from "react";
import "./Article.css";

const Article = ({ img }) => {
  return (
    <div className="blog-right-item">
      <div className="right-item-img">
        <img src={img} alt="blog1" />
      </div>
      <div className="right-item-content">
        <div className="right-item-title">
          <p>Sep 26, 2021</p>
          <h1>GPT-3 and Open AI is the future. Let us explore how it is?</h1>
        </div>
        <div className="right-item-footer">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
