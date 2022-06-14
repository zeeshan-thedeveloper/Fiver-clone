//ReactJS

//Material-UI core
import { Box } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import DesktopChatModule from "./ChatModuleComponents/DesktopChatModule";
import MobileChatModule from "./ChatModuleComponents/MobileChatModule";
import { useMediaQuery } from "@material-ui/core";

//Material-UI styles



//Icons

//Theme and Styles

//Routes

//Resources

export const ChatModule=()=>{
    const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
    return(


            (isDesktopOrLaptopOrTabletScreen ? <DesktopChatModule/> : <MobileChatModule/>)
    )
}