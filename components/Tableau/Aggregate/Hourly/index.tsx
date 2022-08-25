import React from "react";

const AggregateEarningsPerHour = () => {
  return (
    <>
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/AggregateStory/AverageEarningsbyHour?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%" }}
        hide-tabs
        toolbar="hidden"
      ></tableau-viz>
    </>
  );
};

export default AggregateEarningsPerHour;
