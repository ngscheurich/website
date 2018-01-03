import React from "react";
import Helmet from "react-helmet";
import Nav from "../../components/shared/Nav";
import Header from "../../components/soundtrack/Header";
import Tracks from "../../components/soundtrack/Tracks";
import Footer from "../../components/soundtrack/Footer";

import tachyons from "tachyons";
import bgImage from "../../static/images/mr-cup-fabien-barral-86068.jpg";
import data from "../../../data/soundtrack-2017.js";

const year = 2017;
const playlistUrl =
  "https://open.spotify.com/user/spotify/playlist/37i9dQZF1E9LQHSWaFU3wt";
const playlistEmbedUrl =
  "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1E9LQHSWaFU3wt";
const footerColor = "rgb(170, 144, 71)";
const photogName = "Mr Cup / Fabien Barral";
const photogUrl = "https://unsplash.com/@iammrcup";
const title = `Soundtrack of ${year}`;
const description = `What my ${year} sounded like, according to Spotify`;

export default () => (
  <div className="soundtrack">
    <Helmet
      title={title}
      meta={[
        { name: "description", content: description },
        {
          name: "og:url",
          content: `https://www.ngscheurich.com/soundtrack-of-${year}`
        },
        { name: "og:title", content: title },
        { name: "og:description", content: description },
        { name: "og:image", content: bgImage }
      ]}
    />

    <Nav style="dark" />

    <Header year={year} bgImage={bgImage} />

    <main className="pv5" role="main">
      <Tracks
        tracks={data.items.map(item => {
          const track = item.track;

          return {
            id: track.id,
            title: track.name,
            artist: track.artists[0].name,
            image: track.album.images[0].url,
            previewUrl: track.preview_url,
            popularity: track.popularity
          };
        })}
      />
    </main>

    <Footer
      year={year}
      playlistUrl={playlistUrl}
      playlistEmbedUrl={playlistEmbedUrl}
      footerColor={footerColor}
      photogName={photogName}
      photogUrl={photogUrl}
    />
  </div>
);
