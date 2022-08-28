import React, { ReactElement, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import AggregateEarningsPerDay from "../Aggregate/DayOfWeek";
import AggregateEarningsPerHour from "../Aggregate/Hourly";
import AggregateEarningsPerLocation from "../Aggregate/Location";
import PersonalEarningsPerDay from "../Personal/DayOfWeek";
import PersonalEarningsPerHour from "../Personal/Hourly";
import PersonalEarningsPerLocation from "../Personal/Location";
import PanelContainer from "./PanelContainer";
import { useAuth } from "../../Provider/Auth";
import { users } from "../../Provider/Auth/users";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export type Tab = {
  title: string;
  aggregate: ReactElement;
  personal?: ReactElement;
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
      {value === index && <Box height="100%">{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DisplayPanel = () => {
  const [value, setValue] = useState(0);
  const userId = useAuth();

  const tabs: Tab[] = [
    {
      title: "Hourly",
      aggregate: <AggregateEarningsPerHour />,
      personal: userId ? (
        <PersonalEarningsPerHour id={userId} name={users[userId - 1]} />
      ) : undefined,
    },
    {
      title: "Day Of Week",
      aggregate: <AggregateEarningsPerDay />,
      personal: userId ? (
        <PersonalEarningsPerDay id={userId} name={users[userId - 1]} />
      ) : undefined,
    },
    {
      title: "Location",
      aggregate: <AggregateEarningsPerLocation />,
      personal: userId ? (
        <PersonalEarningsPerLocation id={userId} name={users[userId - 1]} />
      ) : undefined,
    },
  ];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      id="Compare"
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        pt: 2,
        pb: 2,
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
