import React from "react";
import Link from "gatsby-link";

export default () => (
  <nav
    className="post__nav ph4 pv3 flex justify-between bb b--black-10 f5 ttu tracked"
    role="navigation"
  >
    <Link className="link dim black-60 b--black-20 fw7 f6 f5-ns" to="/">
      N. G. Scheurich
    </Link>
    <Link className="link dim black-60 b--black-20 f6 f5-ns" to="/journal">
      Journal
    </Link>
  </nav>
);
