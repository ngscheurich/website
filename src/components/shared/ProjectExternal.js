import React from "react";
import PropTypes from "prop-types";

const Project = ({ url, title, description }) => (
  <a className="link dim black-80" href={url}>
    <dl className="lh-copy">
      <dt className="fw7">{title}</dt>
      <dd className="black-60 ml0">{description}</dd>
    </dl>
  </a>
);

Project.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;
