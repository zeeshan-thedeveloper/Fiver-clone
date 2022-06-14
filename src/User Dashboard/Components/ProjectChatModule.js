//ReactJS
import React, { useState, useEffect } from "react";

//Material-UI core
import Skeleton from "@material-ui/lab/Skeleton";
import DesktopChatHistoryModule from "./ChatHistory/DesktopChatHistoryModule";
import MobileChatHistoryModule from "./ChatHistory/MobileChatHistoryModule";
import { useMediaQuery } from "@material-ui/core";
//Style and Theme

//Icons

//Resources

export const ProjectChatModule = () => {

  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  
  return (
    <div>
       { (isDesktopOrLaptopOrTabletScreen) ? <DesktopChatHistoryModule/> : <MobileChatHistoryModule/> }
    </div>
  );
};
