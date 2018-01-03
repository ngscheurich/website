import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="N. G. Scheurich"
      meta={[{ name: "description", content: "Sample" }]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
