import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const BlogPost = ({ post }) => (
  <Link className="link dim black-80" to={post.frontmatter.path} key={post.id}>
    <h1 className="f4 mb2 lh-title">{post.frontmatter.title}</h1>
    <div className="f5 black-60">{post.frontmatter.date}</div>
    <p class="lh-copy">{post.excerpt}</p>
  </Link>
);

BlogPost.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPost;
