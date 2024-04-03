import React from "react";
import { useState } from "react";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse() {
    setCollapsed((t) => !t);
  }
  return (
    <div className="app">
      <h1 onClick={handleCollapse}>{title}</h1>
      {collapsed && children}
    </div>
  );
}

export default Container;
