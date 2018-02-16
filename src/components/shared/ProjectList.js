import React from "react";
import Project from "./Project";
import ProjectExternal from "./ProjectExternal";

export default () => (
  <div>
    <h2 className="f4 ttu">Selected Works</h2>

    <Project
      url="/projects/soundtrack-of-2017"
      title="🎧&nbsp;&nbsp;Soundtrack of 217"
      description="What my 2017 sounded like, according to Spotify"
    />

    <ProjectExternal
      url="https://github.com/ngscheurich/http_find"
      title="🔎&nbsp;&nbsp;HTTP Find"
      description="Searches the contents of an HTTP response for a specified term or pattern"
    />

    <ProjectExternal
      url="https://github.com/ngscheurich/generator-phaser-ts"
      title="👾&nbsp;&nbsp;Phaser + TypeScript Generator"
      description=" Provides a handy jumpstart for a Phaser project with a TypeScript codebase"
    />

    <ProjectExternal
      url="https://github.com/ngscheurich/metallum"
      title="💀&nbsp;&nbsp;Metallum"
      description="Displays random bands from Encyclopaedia Metallum: The Metal Archive "
    />

    <ProjectExternal
      url="https://github.com/ngscheurich/boxcar"
      title="🚋&nbsp;&nbsp;Boxcar"
      description="Opinionated Rails-based CMS stack with modern frontend tooling"
    />
  </div>
);
