import React from "react"
import { storiesOf } from "@storybook/react"
import SocialLinkList, { SocialLink } from "./social-links";

const items = [
  {
    type: "facebook",
    url: "#test",
    text: "Like our page on facebook"

  }, {
    type: "youtube",
    url: "#test",
    text: "Subscribe to our youtube channel"
  }, {
    type: "twitter",
    url: "#test",
    text: "Follow us on twitter"
  }, {
    type: "instagram",
    url: "#test",
    text: "follow us on instagram"
  },
];

storiesOf(`Components/SocialLinks`, module).add(`link item`, () => (
  <SocialLink item={items[0]} />
));

storiesOf(`Components/SocialLinks`, module).add(`link list`, () => (
  <SocialLinkList links={items} />
));
