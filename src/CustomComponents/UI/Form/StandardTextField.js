import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextFonts, HeadingFonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";

const useTextFieldStyles = makeStyles(() => ({
  input: {
    font: ({ isDesktopOrLaptopOrTabletScreen }) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
    color: colors.black,
    // height:  ({isDesktopOrLaptopOrTabletScreen}) =>
    // isDesktopOrLaptopOrTabletScreen ? 10 :5,
  },
  field: {
    margin: ({ margin }) => margin,
  },
}));
export const StandardTextField = ({
  label,
  onChange,
  value,
  width,
  variant,
  margin,
  type = "text",
  size,
  disabled = false,
}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useTextFieldStyles({
    isDesktopOrLaptopOrTabletScreen,
    width,
    margin,
  });

  return (
    <TextField
      label={label}
      value={value}
      onChange={({ target }) => onChange(target.value)}
      InputProps={{ classes: { input: classes.input } }}
      className={classes.field}
      variant={variant}
      fullWidth
      required
      type={type}
      size={size}
      disabled={disabled}
    />
  );
};
