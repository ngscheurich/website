import React, { Component } from "react";
import PropTypes from "prop-types";

import pauseButton from "../../static/images/ic_pause_circle_outline_48px.svg";

function trackSize(popularity, sizes) {
  return popularity > 50 ? sizes.large : sizes.small;
}

const Track = ({ track, sizes, flipped, handleClick }) => (
  <div
    className={`track ${flipped ? "track--flipped" : ""} pointer`}
    onClick={() => handleClick(track)}
    style={{
      background: `#0c0c0c center no-repeat url(${pauseButton})`,
      marginBottom: 20,
      width: trackSize(track.popularity, sizes),
      height: trackSize(track.popularity, sizes)
    }}
  >
    <div
      className="track__front cover bg-center absolute w-100 h-100"
      style={{ backgroundImage: `url(${track.image})` }}
    >
      <div className="track__info aa f5 bg-near-black white-80 pa2 absolute left-0 bottom-0">
        <span className="track__title fw7">{track.title}</span>
        <br />
        <span className="track__artist">{track.artist}</span>
      </div>
      <div className="track__back absolute w-100 h-100" />
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
