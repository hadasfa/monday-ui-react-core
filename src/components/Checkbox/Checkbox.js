import React, { useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import "./Checkbox.scss";

const BASE_CLASS_NAME = "monday-style-checkbox";

const Checkbox = ({
  componentClassName = "",
  label = "",
  onChange = () => {},
  isSelected,
  isDisabled = false
}) => {
  const checkboxRef = useRef();
  const inputClassNames = [`${BASE_CLASS_NAME}__checkbox`];
  if (isSelected) inputClassNames.push(`${BASE_CLASS_NAME}__checkbox--selected`);
  return (
    <label className={cx(BASE_CLASS_NAME, componentClassName)}>
      <input
        className={`${BASE_CLASS_NAME}__input`}
        type="checkbox"
        ref={checkboxRef}
        onChange={onChange}
        checked={isSelected}
        disabled={isDisabled}
        aria-label={label}
      />
      <div className={cx(...inputClassNames)}>
        {isSelected ? (
          <Icon
            className={`${BASE_CLASS_NAME}__icon`}
            iconType={Icon.type.SVG}
            icon={Check}
            iconLabel="Checkbox"
            ignoreFocusStyle
            clickable
            iconSize={11}
          />
        ) : (
          undefined
        )}
      </div>
      <span className={`${BASE_CLASS_NAME}__label`}>
        {label}
      </span>
    </label>
  );
};

Checkbox.defaultProps = {
  componentClassName: PropTypes.string,
  selected: PropTypes.bool
};
Checkbox.propTypes = {
  componentClassName: ""
};

export default Checkbox;
