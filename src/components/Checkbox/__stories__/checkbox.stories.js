import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number } from "@storybook/addon-knobs";
import Checkbox from "../Checkbox";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import { renderCheckboxes } from "./checkbox.stories.renderCheckboxes";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => {
  const checkboxesCount = number("Checkboxes Count", 5);
  return renderCheckboxes(checkboxesCount, { includeKnobs: true });
};

export const empty = () => {
    return <Checkbox/>
};

export const OnChange = () => {
  const [selected, setsSelected] = useState(true);
  return (
    <div>
      <Checkbox
        id="Knobs"
        label={text("label", "text")}
        checked={selected}
        disabled={boolean("isDisabled", false)}
        onChange={() => setsSelected(!selected)}
      />
    </div>
  );
};

export const States = () => {
  const checkboxesCount = number("Checkboxes Count", 5);
  return renderCheckboxes(checkboxesCount, { includeKnobs: true });
};

export const RTLSupport = () => (
  <div>
    <div style={{ direction: "rtl" }}>
      <Checkbox
        id="RTLKnobs"
        label={text("label", "text")}
        checked={boolean("checked", true)}
        disabled={boolean("disabled", false)}
      />
    </div>
    <div style={{ direction: "ltr" }}>
      <Checkbox
        id="LTRKnobs"
        label={text("label", "text")}
        checked={boolean("checked", true)}
        disabled={boolean("disabled", false)}
      />
    </div>
  </div>
);

export default {
  title: "Components/Checkbox",
  component: Checkbox
};
