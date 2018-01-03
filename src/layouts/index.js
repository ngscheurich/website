import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import appleTouchIcon from "../static/favicons/apple-touch-icon.png";
import favicon16 from "../static/favicons/favicon-16x16.png";
import favicon32 from "../static/favicons/favicon-32x32.png";
import avatar from "../static/images/avatar.png";

const title = "The Personal Website of Mr. Nicholas Gunther Scheurich";
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
      link={[
        { rel: "apple-touch-icon", sizes: "180x180", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 }
      ]}
    />

    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
