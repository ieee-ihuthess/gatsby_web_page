import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./../css-init/css-init.scss";

library.add(faCoffee);

const LayoutBase = ({ children }) => {
  return <div>{children}</div>;
};

export default LayoutBase;
