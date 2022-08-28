import { Box } from "@mui/system";
import React from "react";
import MinigamePage from "../MinigamePage";
import DisplayPanel from "../Tableau/DisplayPanel";

export default function ContentArea({ page }: { page: number }) {
  return (
    <Box
      sx={{
        left: page === 1 ? "-100%" : 0,
        display: "flex",
        position: "absolute",
        height: '100%',
        width:"200%"
      }}
    >
      <DisplayPanel />
      <MinigamePage />
    </Box>
  );
}
