import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanelContainer from "./PanelContainer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export type Tab = {
  title: string;
  aggregate: ReactElement;
  personal: ReactElement;
};

type DisplayPanelProps = {
  tabs: Tab[];
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ flex: 1 }}
      {...other}
    >
      {value === index && <Box >{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DisplayPanel = ({ tabs }: DisplayPanelProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        pt: 2,
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Tableau Display Panel"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {tabs.map((tab, index) => (
          <Tab label={tab.title} {...a11yProps(index)} key={`label_${index}`} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={`tabpanel_${index}`}>
          <PanelContainer personal={tab.personal} aggregate={tab.aggregate} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default DisplayPanel;
