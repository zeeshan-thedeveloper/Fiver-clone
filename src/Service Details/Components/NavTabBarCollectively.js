import React from "react";
import ServiceDetailsNavbar from "./ServiceDetailsNavbar";
import ServiceDetailsTabs from "./ServiceDetailsTabs";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AppBar, Grid,Box} from "@material-ui/core";
import './Styles/StyleSheet.css'

export default class NavTabBarCollectively extends React.Component {
  constructor(props) {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
      currentSelectedTabIndex:0,
      handelTabIndex:props.handelTabIndex.bind(props.handelTabIndex()),
      handelTabChangeEvent:this.handelTabChangeEvent.bind(this)
    };
  }

  handelTabChangeEvent = (event,indexSelected)=>
  {
    this.state.handelTabIndex(event,indexSelected);
    this.setState({currentSelectedTabIndex:indexSelected});
  }
  componentDidMount() 
  {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };

  render() {
    // console.log(this.state);
    return(
      <AppBar style={{backgroundColor:"transparent"}}>
       
              <div className="navdiv">
                  <div className={this.state.show ? "active" : "hidden"}>
                       <ServiceDetailsNavbar/>
                        <Grid container >
                            <Grid item xs={12}>
                                <Box px={0}>
                                    <ServiceDetailsTabs handelTabChangeEvent={this.state.handelTabChangeEvent}/>
                                </Box>
                            </Grid>
                        </Grid>
                  </div>
              </div>
      </AppBar>   
      );
  }
}
