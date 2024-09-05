import React from "react";
import Select from "react-select";

const themeOptions = [
  { label: "Light Mode", value: "light" },
  { label: "Dark Mode", value: "vs-dark" }
];

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder="Select Theme"
      options={themeOptions}
      value={themeOptions.find((option) => option.value === theme)}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;
