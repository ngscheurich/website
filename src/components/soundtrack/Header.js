import React from "react";
import PropTypes from "prop-types";

const Header = ({ year, bgImage }) => (
  <header
    className="tc cover pv6 pv7-ns"
    role="banner"
    style={{ backgroundImage: `url(${bgImage}` }}
  >
    <div className="contents w-70 mw6 center pa4 near-white bg-near-black aa">
      <h1 className="ma0 mb3 f1-ns ttu display">Soundtrack of {year}</h1>
      <p className="ma0">What my year sounded like, according to Spotify</p>
    </div>
  </header>
);

Header.propTypes = {
  year: PropTypes.number.isRequired,
  bgImage: PropTypes.string.isRequired
};

export default Header;
