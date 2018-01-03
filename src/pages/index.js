import React from "react";
import Bio from "../components/Bio";
import Projects from "../components/Projects";

import tachyons from "tachyons";
import "../styles/index.css";

export default () => (
  <div className="index black-80 measure pa4">
    <header className="pb3" role="banner">
      <Bio />
    </header>

    <main role="main">
      <Projects />
    </main>
  </div>
);
