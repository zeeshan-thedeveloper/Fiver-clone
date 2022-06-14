
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


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
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepLabel: {
    color: "#000000",
    fontWeight: "bold",
  },
  StepContent: {
    color: "#000000",
  },
}));

function getSteps() {
  return [
    "My Info",
    "Billing methods",
    "Password and Security",
    "Notification Settings",
    "Balance",
    "Critical",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Complete/Edit your profile by putting correct personal information.`;
    case 1:
      return `Add/Change your payment method that is easy for you to work on codeindna!.`;
    case 2:
      return `Protect you account by setting an strong password.`;
    case 3:
      return `Get Notified for activities on your account.`;
    case 4:
      return `Check your balance in account.`;
    default:
      return "Set Invisible or Deactivate your account.";
  }
}

function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => {

      props.currentStep(prevActiveStep+1) //Send this number to parent component so that it can rendre respective comps
      return prevActiveStep + 1;      
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>{
      props.currentStep(prevActiveStep-1) //Send this number to parent component so that it can rendre respective comps
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

export const AccountSettingsSidebar = (props) => {

 function setCurrentStep(step){
     props.currentStep(step)
 }
  return(
    <VerticalLinearStepper currentStep={setCurrentStep}/>
  ) ;
};