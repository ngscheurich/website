import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const PostSummary = ({ post }) => (
  <Link
    className="link dim black-80 mb4 db"
    to={post.frontmatter.path}
    key={post.id}
  >
    <h1 className="f4 mb2 lh-title">{post.frontmatter.title}</h1>
    <div className="f5 black-60">{post.frontmatter.date}</div>
    <p className="lh-copy f6">{post.excerpt}</p>
  </Link>
);

PostSummary.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostSummary;
