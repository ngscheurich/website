import React, { Component } from "react";
import PropTypes from "prop-types";

import pauseButton from "../../static/images/ic_pause_circle_outline_48px.svg";

function trackSize(popularity, sizes) {
  return popularity > 50 ? sizes.large : sizes.small;
}

const Track = ({ track, sizes, flipped, handleClick }) => (
  <div
    className={`track ${flipped ? "track--flipped" : ""}`}
    onClick={() => handleClick(track)}
    style={{
      background: `#0c0c0c center no-repeat url(${pauseButton})`,
      marginBottom: 20,
      width: trackSize(track.popularity, sizes),
      height: trackSize(track.popularity, sizes)
    }}
  >
    <div
      className="track__front"
      style={{ backgroundImage: `url(${track.image})` }}
    >
      <div className="track__info aa">
        <span className="track__title">{track.title}</span>
        <br />
        <span className="track__artist">{track.artist}</span>
      </div>
      <div className="track__back" />
    </div>
  </div>
);

Track.propTypes = {
  track: PropTypes.object.isRequired,
  sizes: PropTypes.object.isRequired,
  flipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Track;
