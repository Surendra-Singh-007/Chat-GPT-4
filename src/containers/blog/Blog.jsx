import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt4__blog section__padding" id="blog">
      <div className="gpt4__blog-heading">
        <h1 className="gradient__text">
        GPT-4, the latest milestone in OpenAI’s effort in scaling up deep learning.
        </h1>
      </div>
      <div className="gpt4__blog-container">
        <div className="gpt4__blog-container_groupA">
          <Article imgURL={blog01} date="Jan 1, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt4__blog-container_groupB">
          <Article imgURL={blog02} date="Jan 11, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog03} date="Feb 7, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog04} date="Feb 9, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgURL={blog05} date="Mar 11, 2023" title="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
