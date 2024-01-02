import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="blog section__padding">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-left-container">
          <div className="blog-left-item">
            <div className="left-item-img">
              <img src={blog01} alt="blog1" />
            </div>
            <div className="left-item-content">
              <div className="left-item-title">
                <p>Sep 26, 2021</p>
                <h1>
                  GPT-3 and Open AI is the future. Let us explore how it is?
                </h1>
              </div>
              <div className="left-item-footer">
                <p>Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-right-container">
          <Article img={blog02} />
          <Article img={blog03} />
          <Article img={blog04} />
          <Article img={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
