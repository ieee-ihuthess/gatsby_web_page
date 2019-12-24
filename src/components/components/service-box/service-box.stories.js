import React from "react"
import { storiesOf } from "@storybook/react"
import ServiceBox from "./service-box";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCoffee);

const defaultItem = {
  icon: "coffee",
  title: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
}

storiesOf(`Components/ServiceBox`, module).add(`default`, () => (
  <ServiceBox item={defaultItem} />
));
