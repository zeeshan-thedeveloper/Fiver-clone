import React from "react";
import cx from "clsx";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import colors from "../../../Theme/colors";
import { Typography } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/system";

//styles
const TeamCardStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    borderRadius: theme.spacing(2), // 16px
    transition: "0.3s",
    position: "relative",
    maxWidth: "100%",
    marginLeft: "auto",
    overflow: "initial",
    background: colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: theme.spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      width: ({ expand }) => (expand ? "80%" : "100%"),
      height: ({ expand }) => (expand ? "80%" : "100%"),
      marginLeft: theme.spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      //backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: theme.spacing(2), // 16
      //opacity: 0.5,
    },
    readMoreButton: {
      backgroundColor: colors.success,
    },
  },
  content: {
    padding: 10,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const TeamCard = React.memo(function BlogCard({ member, isLoading }) {
  const [expanded, setExpanded] = React.useState(false);
  const styles = TeamCardStyles({ expanded });
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={cx(styles.root)}>
      {isLoading ? (
        <Skeleton variant="rectangular" height={200} width={220} />
      ) : (
        <CardMedia
          className={styles.media}
          image={member.memberProfilePicture}
        />
      )}{" "}
      <CardContent className={styles.content}>
        {isLoading ? (
          <Box>
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width={290} />{" "}
            <Skeleton variant="text" width="60%" />
          </Box>
        ) : (
          <TextInfoContent
            classes={contentStyles}
            overline={member.memberRole}
            heading={member.memberFirstName + " " + member.memberLastName}
            body={Array.from(member.memberIntroductionText).slice(0, 90)}
          />
        )}

        {isLoading ? (
          <Skeleton variant="text" width="20%" />
        ) : (
          <span className={styles.readMoreButton}>Read More</span>
        )}
        {isLoading ? (
          <Skeleton variant="text" width="8%" />
        ) : (
          <IconButton
            className={clsx(styles.expand, {
              [styles.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {Array.from(member.memberIntroductionText).slice(90)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
});

export default TeamCard;
