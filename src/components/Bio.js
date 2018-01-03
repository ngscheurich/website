import React from "react";

export default () => (
  <div itemScope itemType="http://schema.org/Person">
    <h1 className="f3 fw7 lh-title">
      <span className="dn" itemProp="givenName">
        Nicholas
      </span>
      <span itemProp="nickName">N. G.</span>{" "}
      <span itemProp="familyName">Scheurich</span>
    </h1>

    <div className="lh-copy">
      <p className="mv0">Software developer by day.</p>
      <p className="mv0">Game designer by night.</p>
      <p className="mv0">Always up for an adventure.</p>
    </div>

    <ul className="list pl0 flex">
      <li className="mr3">
        <a
          className="link dim black-60 bb b--black-20"
          href="https://github.com/ngscheurich"
          title="See my projects on GitHub"
        >
          GitHub
        </a>
      </li>
      <li className="mr3">
        <a
          className="link dim black-60 bb b--black-20"
          href="https://twitter.com/ngscheurich"
          title="Follow me on Twitter"
        >
          Twitter
        </a>
      </li>
      <li className="">
        <a
          className="link dim black-60 bb b--black-20"
          href="mailto:ngscheurich@gmail.com"
          itemProp="email"
          title="Send me an email"
        >
          Electronic Mail
        </a>
      </li>
    </ul>
  </div>
);
