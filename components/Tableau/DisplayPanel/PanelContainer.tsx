import React, { ReactElement, ReactNode } from "react";
import { Box, Divider, Typography } from "@mui/material";

const PanelSection = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      p: "0 1rem",
      flex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: 'auto'
    }}
  >
    {children}
  </Box>
);

const Header = ({ children }: { children: ReactNode }) => (
  <Typography
    variant="h5"
    sx={{
      pb: 1,
      textAlign: "center",
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: 20,
      flex: 0,
    }}
  >
    {children}
  </Typography>
);

type PanelProps = {
  personal?: ReactElement;
  aggregate: ReactElement;
};

const PanelContainer = ({ personal, aggregate }: PanelProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <PanelSection>
        <Header>Personal</Header>
        {personal}
      </PanelSection>
      <Divider orientation="vertical" flexItem />
      <PanelSection>
        <Header>Aggregate</Header>
        {aggregate}
      </PanelSection>
    </Box>
  );
};

export default PanelContainer;
