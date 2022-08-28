import React, { ReactNode } from "react";
import { Button } from "@mui/material";

type TabProps = {
  selected: boolean;
  children: ReactNode;
  onClick: VoidFunction;
};
const TabButton = ({ selected, children, onClick }: TabProps) => {
  return (
    <Button
      sx={{
        color: "#fff",
        borderRadius: 0,
        borderBottom: "2px solid",
        borderColor: selected ? "#fff" : "transparent",
        m: "0 8px",
        p: "0 14px",
        height: "100%",
        opacity: selected ? "1" : "0.5",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default TabButton;
