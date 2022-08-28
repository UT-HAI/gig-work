import React from "react";
import TableauViz from "../../tableau";

const AggregateEarningsPerDay = () => {
  return (
    <>
      <TableauViz
        src="https://public.tableau.com/views/AggregateStory/Avg_DriverEarningsbyDay?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%", flex: 1 }}
      />
    </>
  );
};

export default AggregateEarningsPerDay;
