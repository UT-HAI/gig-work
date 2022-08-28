import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { Box } from "@mui/system";
import { Divider, Fab } from "@mui/material";
import Minigame from "../Tableau/Minigame";
import { useAuth } from "../Provider/Auth";

const MinigamePage: NextPage = () => {
  const [tryAgain, setTryAgain] = useState(false);
  const [compare, setCompare] = useState(false);
  const userId = useAuth();


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
        <Box
          sx={{
            display: "flex",
            flexDirection: compare ? "row" : "column",
            width: "50%",
            position: "absolute",
            top: tryAgain ? -2027 : 0,
          }}
        >
          <Minigame id="BaseMinigame" show={!tryAgain || compare} />
          {compare && (
            <Divider flexItem orientation="vertical" sx={{ borderWidth: 1 }} />
          )}
          <Minigame id="RetryMinigame" show={tryAgain || compare} />
        </Box>
      </Box>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "absolute",
          right: 16,
          bottom: 16,
        }}
      >
        <Fab
          color="primary"
          variant="extended"
          disabled={compare || tryAgain}
          onClick={handleTryAgain}
        >
          Try Again
        </Fab>
        <Fab
          color="primary"
          variant="extended"
          disabled={!tryAgain || compare}
          onClick={handleCompare}
        >
          Compare
        </Fab>
        <Fab color="primary" variant="extended" onClick={handleStartOver}>
          Start Over
        </Fab>
      </Box>
    </>
  );
};
export default MinigamePage;
