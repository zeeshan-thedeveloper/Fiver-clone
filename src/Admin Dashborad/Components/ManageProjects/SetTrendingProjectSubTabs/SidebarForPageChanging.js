import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Headingfonts } from "../../../../Theme/fonts";
import { RoundButton } from "../../../../CustomComponents/UI/Buttons/RoundButton";
import colors from "../../../../Theme/colors";
/***
 * 
    const setCurrentStepNumber = (value)=>{
        
    }

    <SidebarForPageChanging setCurrentStepNumber={setCurrentStepNumber}/>

    
 */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
    marginTop:theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepLabel: {
    color: "#000000",
    fontWeight: "bold",
    font:Headingfonts.extraExtraSmall,
    fontSize:20
  },
  StepContent: {
    color: "#000000",
    
  },
  setContent:{
    font:Headingfonts.extraExtraSmall,
    fontSize:18,

  }
}));


function getSteps() {
  return [
    "Currently visible",
    "Set projects",
    "Display modes",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Here are the projects which are publically visible.`;
    case 1:
      return `Update/Add the projects for different modes.`;
    case 2:
      return `Select mode of display mode and publish it.`;
    default:
      return "Please give an valid panel";
  }
}

function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    if(props.isLockClosed)
    {
      setActiveStep((prevActiveStep) => {
        props.setCurrentStepNumber(prevActiveStep+1) //Send this number to parent component so that it can rendre respective comps
        return prevActiveStep + 1;      
      });
    }
    else
    {
      props.handleModelOpen();
    }
      
  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) =>{
      props.setCurrentStepNumber(prevActiveStep-1) //Send this number to parent component so that it can rendre respective comps
      return prevActiveStep - 1;

    });
    };
    // const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <Typography className={classes.stepLabel}>{label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography classNema={classes.setContent}>
                {getStepContent(index)}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === steps.length-1}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export const SidebarForPageChanging = (props) => {

 
  return(
    <VerticalLinearStepper handleModelClose={props.handleModelClose} handleModelOpen={props.handleModelOpen} isLockClosed={props.isLockClosed} setCurrentStepNumber={props.setCurrentStepNumber} />
  ) ;
};