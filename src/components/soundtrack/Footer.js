import React from "react";
import PropTypes from "prop-types";

const Footer = ({
  year,
  playlistUrl,
  playlistEmbedUrl,
  footerColor,
  photogName,
  photogUrl
}) => (
  <footer
    className="aa"
    style={{ backgroundColor: footerColor }}
    role="content-info"
  >
    <div className="white flex-l ph4 ph5-ns pv5">
      <section className="w-100 w-third-l mb4 mb0-l mr4-l">
        <h2 className="mv0 ttu display">What’s this all about?</h2>
        <p className="lh-copy measure">
          Presented here are the tracks from my <i>Your Top Songs {year}</i>{" "}
          playlist, which was auto-compiled by Spotify. I’m unsure of the
          metrics involved in determining that these tracks were <i>top</i>, nor
          in fact how Spotify has defined <i>top</i> in this context. Suffice it
          to say, I listened to these tracks a lot in {year}, and they’re all
          pretty great in my opinion.
        </p>
      </section>

      <section className="w-100 w-third-l mb4 mb0-l mr4-l">
        <h2 className="mv0 ttu display">How was this made?</h2>
        <p className="lh-copy measure">
          I downloaded a <abbr title="JavaScript Object Notation">JSON</abbr>{" "}
          representation of the playlist via Spotify’s Web{" "}
          <abbr title="application programming interface">API</abbr>. Then I
          took that data and fed it to a{" "}
          <a
            className="link dim white-80 bb b--white-30"
            href="https://reactjs.org/"
          >
            React
          </a>{" "}
          component I built which in turn had lots of little baby components and
          here we are.{" "}
          <a
            className="link dim white-80 bb b--white-30"
            href="http://tachyons.io/"
          >
            Tachyons
          </a>{" "}
          was super handy for basic styling.
        </p>
      </section>

      <section className="w-100 w-third-l">
        <h2 className="mv0 ttu display">Can I hear the full playlist?</h2>
        <p>
          I don’t know,{" "}
          <a className="link dim white-80 bb b--white-30" href={playlistUrl}>
            you tell me
          </a>.
        </p>
        <iframe
          className="player measure"
          src={playlistEmbedUrl}
          frameBorder="0"
          allowTransparency="true"
        />
      </section>
    </div>

    <div className="flex-ns justify-between white pv3 ph4 ph5-ns bg-black-10">
      <div className="mb3 mb0-ns" itemScope itemType="http://schema.org/Person">
        <a
          className="link dim white-80 bb b--white-30"
          href="https://www.ngscheurich.com/"
        >
          <span className="name">Nick</span>
        </a>{" "}
        made this.
        <a
          className="link dim white-80 bb b--white-30"
          href={`https://github.com/ngscheurich/dot-com/blob/master/src/pages/projects/soundtrack-of-${year}.js`}
        >
          &lt;source&gt;
        </a>
      </div>

      <div>
        Header photo by{" "}
        <a className="link dim white-80 bb b--white-30" href={photogUrl}>
          {photogName}
        </a>{" "}
        on Unsplash
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  playlistUrl: PropTypes.string.isRequired,
  playlistEmbedUrl: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  photogName: PropTypes.string.isRequired,
  photogUrl: PropTypes.string.isRequired
};

export default Footer;
