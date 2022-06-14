import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
    button
}));

const loginButton = ({ title, handleOnClick, variant , bgColor, color  }) => {
  return (
    <Button
      variant={variant}
      classes={{
        root: classes.btnContained,
      }}
      onClick={handleOnClick}
    >
      {title}
    </Button>
  );
};
