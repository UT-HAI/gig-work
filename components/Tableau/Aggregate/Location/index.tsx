import React from "react";
import TableauViz from "../../tableau";

const AggregateEarningsPerLocation = () => {
  return (
    <>
      <TableauViz
        src="https://public.tableau.com/views/AggregateStory/Map?:language=en-US&:display_count=n&:origin=viz_share_link"
        height="100%"
        style={{ width: "100%", flex: 1 }}
      />
    </>
  );
};

export default AggregateEarningsPerLocation;
