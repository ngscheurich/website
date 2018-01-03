import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const Nav = ({ style, border }) => {
  const bgClasses = style === "dark" ? "bg-near-black aa" : "";
  const linkColor = style === "dark" ? "white" : "black";
  const borderClasses = border ? "bb b--black-10" : "";

  return (
    <nav
      className={`post__nav ph4 pv3 flex justify-between ttu tracked ${bgClasses} ${borderClasses}`}
      role="navigation"
    >
      <Link className={`link dim fw7 f6 f5-ns ${linkColor}-60`} to="/">
        ⬅ NGS
      </Link>
      <Link className={`link dim f6 f5-ns ${linkColor}-60`} to="/journal">
        Journal
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  style: PropTypes.string,
  border: PropTypes.bool
};

Nav.defaultProps = {
  style: "light",
  border: false
};

export default Nav;
