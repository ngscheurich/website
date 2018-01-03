import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Nav from "../components/shared/Nav";

import tachyons from "tachyons";
import "../styles/journal.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="post">
      <Helmet
        title={`${post.frontmatter.title} – The Journal of Mr. N. G. Scheurich`}
      />

      <Nav border={true} />

      <div className="ph3 ph4-ns pv4 pv5-ns">
        <div className="post__content measure-wide center">
          <h1 className="post__title f3 f1-ns lh-title mt0">
            {post.frontmatter.title}
          </h1>
          <div
            className="lh-copy f4-ns"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
