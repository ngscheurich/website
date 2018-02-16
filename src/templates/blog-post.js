import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/shared/Nav";
import Bio from "../components/shared/Bio";
import ProjectList from "../components/shared/ProjectList";

import tachyons from "tachyons";
import "../styles/journal.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <Helmet
        title={`${post.frontmatter.title} – The Journal of Mr. N. G. Scheurich`}
        meta={[
          { name: "og:title", content: post.frontmatter.title },
          { name: "og:description", content: post.frontmatter.description }
        ]}
      />

      <div className="black-80 flex-l w-100-l vh-100-l fixed-l">
        <div className="pa4 pa5-ns bb bb-0-l br-l b--black-10">
          <header className="measure-narrow pb3" role="banner">
            <Bio />
          </header>

          <div className="measure-narrow dn db-ns">
            <ProjectList />
          </div>
        </div>

        <main className="post black-80 flex-auto overflow-y-scroll">
          <Nav border={true} />
          <div className="ph3 ph5-ns pv4 pv5-ns">
            <div className="post__content measure-wide">
              <h1 className="post__title f3 f1-ns lh-title mt0">
                {post.frontmatter.title}
              </h1>
              <div
                className="lh-copy f4-ns"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </main>
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
        description
      }
    }
  }
`;
