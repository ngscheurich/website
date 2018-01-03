import React, { Component } from "react";
import PropTypes from "prop-types";

import pauseButton from "../../images/ic_pause_circle_outline_48px.svg";

const trackSize = popularity => (popularity > 50 ? 380 : 180);

const Track = ({ track, flipped, handleClick }) => (
  <div
    className={`track ${flipped ? "track--flipped" : ""}`}
    onClick={() => handleClick(track)}
    style={{
      background: `#0c0c0c center no-repeat url(${pauseButton})`,
      marginBottom: 20,
      width: trackSize(track.popularity),
      height: trackSize(track.popularity)
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
  handleClick: PropTypes.func.isRequired
};

export default Track;
