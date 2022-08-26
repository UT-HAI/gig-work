import React, { ReactElement, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

type PanelProps = {
  personal?: ReactElement;
  aggregate: ReactElement;
};
const PanelContainer = ({ personal, aggregate }: PanelProps) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <Box sx={{ p: "0 1rem", flex: 1 }}>
        <Typography variant="h5" sx={{ pb: 1 }}>
          Personal
        </Typography>
        {personal}
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ p: "0 1rem", flex: 1 }}>
        <Typography variant="h5" sx={{ pb: 1}}>
          Aggregate
        </Typography>
        {aggregate}
      </Box>
    </Box>
  );
};

export default PanelContainer;
