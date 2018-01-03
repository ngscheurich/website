import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import BlogPost from "./BlogPost";

const BlogPostList = ({ posts }) => (
  <section>
    <h1 className="dib pb1 bb b--black-80 ht1 hb0 f6 tracked ttu">
      From the Journal
    </h1>
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => <BlogPost post={post} />)}
  </section>
);

BlogPostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default BlogPostList;
