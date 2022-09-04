import React, { useState } from "react";
import { Box, Fab, Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Create your schedule", "Revisit your schedule", "Compare"];

export const STEPPER_HEIGHT = "1.25rem + 72px";

type StepperProps = {
  onTryAgain: VoidFunction;
  onStartOver: VoidFunction;
  onCompare: VoidFunction;
};
export default function ScheduleStepper({
  onTryAgain,
  onStartOver,
  onCompare,
}: StepperProps) {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
    if (step === 0) {
      onStartOver();
    } else if (step === 1) {
      onTryAgain();
    } else {
      onCompare();
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", zIndex: 2, position: "relative", p: 2 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "absolute",
          right: 16,
          bottom: 16,
        }}
      >
        {activeStep !== 0 && (
          <Fab color="primary" variant="extended" onClick={handleStep(0)}>
            {activeStep === 2 ? "Start Over" : "Back"}
          </Fab>
        )}
        {activeStep !== 2 && (
          <Fab
            color="primary"
            variant="extended"
            onClick={handleStep(activeStep + 1)}
          >
            Next
          </Fab>
        )}
      </Box>
    </>
  );
}
