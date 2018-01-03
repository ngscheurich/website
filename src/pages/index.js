import React from "react";
import Bio from "../components/Bio";
import ProjectList from "../components/ProjectList";
import BlogPostList from "../components/BlogPostList";

import tachyons from "tachyons";
import "../styles/index.css";

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="index black-80 flex-l w-100-l vh-100-l fixed-l">
      <div className="pa4 pa5-ns bb bb-0-l br-l b--black-10">
        <header className="measure pb3" role="banner">
          <Bio />
        </header>

        <main className="measure" role="main">
          <ProjectList />
        </main>
      </div>

      <div className="flex-auto overflow-y-scroll">
        <div className="measure-wide pa4 pa5-ns">
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
