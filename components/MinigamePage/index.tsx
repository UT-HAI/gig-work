import React, { useState } from "react";
import type { NextPage } from "next";
import { Box } from "@mui/system";
import { Button, ButtonGroup, Divider, Fab } from "@mui/material";
import Layout from "../Layout";
import Minigame from "../Tableau/Minigame";
import { useAuth } from "../AuthProvider";

const Game4: NextPage = () => {
  // const [checked, setChecked] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [compare, setCompare] = useState(false);
  const userId = useAuth();

  const handleTryAgain = () => {
    setTryAgain(true);
  };
  const handleCompare = () => {
    setCompare(true);
  };

  const handleStartOver = () => {
    setTryAgain(false);
    setCompare(false);
  }
  return (
    <Layout title="MiniGame 4" userId={userId}>
      <Box
        sx={{
          p: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Minigame show={!tryAgain || compare} />
        {compare && (
          <Divider flexItem orientation="vertical" sx={{ borderWidth: 1 }} />
        )}
        <Minigame show={tryAgain || compare} />
      </Box>
      {/* <ButtonGroup
      sx={{mt: 1, mb: 2}}
        variant="contained"
        aria-label="outlined primary button group"
      > */}
      <Box sx={{'& > :not(style)': { m: 1 }, position: 'absolute', right: 16, bottom: 16 }}>
        <Fab color="primary" variant="extended" disabled={compare || tryAgain} onClick={handleTryAgain}>Try Again</Fab>
        <Fab color="primary" variant="extended" disabled={!tryAgain || compare} onClick={handleCompare}>Compare</Fab>
        <Fab color="primary" variant="extended" onClick={handleStartOver}>Start Over</Fab>
        </Box>
      {/* </ButtonGroup> */}
    </Layout>
  );
};
export default Game4;
