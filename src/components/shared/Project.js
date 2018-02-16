import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const Project = ({ url, title, description }) => (
  <Link className="link dim black-80" to={url}>
    <dl className="lh-copy">
      <dt className="fw7">{title}</dt>
      <dd className="black-60 ml0">{description}</dd>
    </dl>
  </Link>
);

Project.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;
