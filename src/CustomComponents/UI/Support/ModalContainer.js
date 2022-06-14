import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useMediaQuery,Button } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars-2";

//styles
const ModalContainerStyle = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    width: ({ isDesktopOrLaptopOrTabletScreen, desktopWidth, mobileWidth }) =>
      isDesktopOrLaptopOrTabletScreen ? desktopWidth : mobileWidth,
    overflow: ({ overflow }) => overflow,
    height: ({
      isDesktopOrLaptopOrTabletScreen,
      mobileHeigth,
      desktopHeigth,
    }) => (isDesktopOrLaptopOrTabletScreen ? desktopHeigth : mobileHeigth),
    display: "block",
  },
}));

export default function ModalContainer({
  open,
  handleClose,
  Component,
  desktopWidth,
  desktopHeigth,
  mobileWidth,
  mobileHeigth,
  overflow,
}) {
  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  const classes = ModalContainerStyle({
    desktopWidth,
    desktopHeigth,
    mobileWidth,
    mobileHeigth,
    overflow,
    isDesktopOrLaptopOrTabletScreen,
  });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>{Component}
        </div>
       
      </Fade>
    </Modal>
  );
}
