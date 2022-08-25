import React from "react";

const AggregateEarningsPerLocation = () => {
  return (
    <>
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/AggregateStory/Avg_EarningsbyPickupLocationMap?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%" }}
        hide-tabs
        toolbar="hidden"
      ></tableau-viz>
    </>
  );
};

export default AggregateEarningsPerLocation;
