import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "./form-items";

storiesOf(`Components/FormItems/Button`, module).add(`primary`, () => (
  <Button text="Click me" />
));

storiesOf(`Components/FormItems/Button`, module).add(`secondary`, () => (
  <Button text="Click me" secondary />
));
