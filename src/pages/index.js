import React from "react";
import Bio from "../components/Bio";
import ProjectList from "../components/ProjectList";
import BlogPostList from "../components/BlogPostList";

import tachyons from "tachyons";
import "../styles/index.css";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="index flex black-80 w-100 vh-100 fixed">
      <div className="measure pa5 br b--black-10">
        <header className="pb3" role="banner">
          <Bio />
        </header>

        <main role="main">
          <ProjectList />
        </main>
      </div>

      <div className="flex-auto overflow-y-scroll">
        <div className="measure-wide pa5">
          <BlogPostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
