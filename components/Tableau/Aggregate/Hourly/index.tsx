import React from "react";
import TableauViz from "../../tableau";

const AggregateEarningsPerHour = () => {
  return (
    <>
      <TableauViz
        src="https://public.tableau.com/views/AggregateStory/AverageEarningsbyHour?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%" }}
      />
    </>
  );
};

export default AggregateEarningsPerHour;
