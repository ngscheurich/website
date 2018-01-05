import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import favicon from "../static/favicon.ico";

const title = "The Personal Website of Mr. N. G. Scheurich";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={title} link={[{ rel: "icon", href: favicon }]} />

    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
