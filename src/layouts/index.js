import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import favicon from "../static/favicon.ico";
import avatar from "../static/images/avatar.png";

const title = "The Personal Website of Mr. N. G. Scheurich";
const description = `Scholar of arcane mysteries such as computer programming,
   game design, and the Vim text editor.`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: "description", content: description },
        { name: "og:url", content: `https://www.ngscheurich.com/` },
        { name: "og:title", content: title },
        { name: "og:description", content: description },
        { name: "og:image", content: avatar }
      ]}
      link={[{ rel: "icon", href: favicon }]}
    />

    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
