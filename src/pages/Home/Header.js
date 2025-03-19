import React from "react";

const Header = ({ config }) => {
  return (
    <div id="header" className={config.theme}>
      {config.title && <h1>{config.title}</h1>}
      {config.subtitle && <h2>{config.subtitle}</h2>}
      {config.byline && <p>{config.byline}</p>}
    </div>
  );
};

export default Header;
