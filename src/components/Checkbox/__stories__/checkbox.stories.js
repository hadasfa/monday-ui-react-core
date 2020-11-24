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
import RadioButtonStoryLine from "../../RadioButton/__stories__/RadioButtonStoryLine";
import RadioButton from "../../RadioButton/RadioButton";

export const Sandbox = () => {
  const checkboxesCount = number("Checkboxes Count", 5);
  return renderCheckboxes(checkboxesCount, { includeKnobs: true });
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
    return (
        <StoryWrapper>
            <RadioButtonStoryLine title="Regular">
            <Checkbox title="Regular">
                <RadioButton
                    value="1"
                    text="Option"
                    name="regular"
                    componentClassName="monday-style-regular"
                    disabled={false}
                />
            </Checkbox>
            </RadioButtonStoryLine>
            <RadioButtonStoryLine title="Selected">
                <Checkbox
                    value="1"
                    label="Option"
                    name="selected"
                    defaultChecked={true}
                    disabled={false}
                    componentClassName="monday-style-selected"
                />
            </RadioButtonStoryLine>
            <RadioButtonStoryLine title="Disabled">
                <Checkbox
                    value="1"
                    label="Option"
                    name="disabledRadio"
                    disabled={true}
                />
            </RadioButtonStoryLine>
            <RadioButtonStoryLine title="Disabled selected">
                <Checkbox
                    value="1"
                    text="Option"
                    name="disabledSelected"
                    disabled={true}
                    defaultChecked={true}
                />
            </RadioButtonStoryLine>
        </StoryWrapper>
    );
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