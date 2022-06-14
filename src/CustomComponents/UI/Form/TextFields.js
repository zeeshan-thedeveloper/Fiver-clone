import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextFonts, HeadingFonts } from "../../../Theme/fonts";
import colors from "../../../Theme/colors";

const useTextFieldStyles = makeStyles(() => ({
  input: {
    width: ({isDesktopOrLaptopOrTabletScreen}) =>
      isDesktopOrLaptopOrTabletScreen ? 280 : 180,
    font: ({isDesktopOrLaptopOrTabletScreen}) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.large,
    color: colors.black,
  },
}));
export const TextFieldWithIcon = ({
  label,
  icon,
  onChange,
  value,
  type,
  size='medium'

}) => {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  const classes = useTextFieldStyles({isDesktopOrLaptopOrTabletScreen});

  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-end"
      justifyContent="center"
      style={{ marginTop: "5%" }}
    >
      <Grid item>{icon}</Grid>
      <Grid item>
        <TextField
          label={label}
          value={value}
          onChange={({ target }) => onChange(target.value)}
          type={type}
          InputProps={{ classes: { input: classes.input } }}
          required
          size={size}
          fullWidth
          
        />
      </Grid>
    </Grid>
  );
};
