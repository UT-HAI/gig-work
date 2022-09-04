import React, { useState } from "react";
import type { NextPage } from "next";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Minigame, { MINIGAME_HEIGHT } from "../Tableau/Minigame";
import ScheduleStepper, { STEPPER_HEIGHT } from "../ScheduleStepper";

const MinigamePage: NextPage = () => {
  const [tryAgain, setTryAgain] = useState(false);
  const [compare, setCompare] = useState(false);

  const handleTryAgain = () => {
    setTryAgain(true);
  };
  const handleCompare = () => {
    setCompare(true);
    setTryAgain(false);
  };

  const handleStartOver = () => {
    setTryAgain(false);
    setCompare(false);
  };
  return (
    <>
      <Box
        id="Schedule"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <ScheduleStepper
          onCompare={handleCompare}
          onStartOver={handleStartOver}
          onTryAgain={handleTryAgain}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: compare ? "row" : "column",
            width: "50%",
            position: "absolute",
            top: tryAgain ? -MINIGAME_HEIGHT : 0,
            mt: `calc(${STEPPER_HEIGHT})`,
          }}
        >
          <Minigame id="BaseMinigame" show={!tryAgain || compare} />
          {compare && (
            <Divider flexItem orientation="vertical" sx={{ borderWidth: 1 }} />
          )}
          <Minigame id="RetryMinigame" show={tryAgain || compare} />
        </Box>
      </Box>
    </>
  );
};
export default MinigamePage;
