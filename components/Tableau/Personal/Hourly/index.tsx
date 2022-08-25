import React from "react";

export default function PersonalEarningsPerHour() {
  return (
    <>
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/Personal1_16607973716650/AverageEarningsbyHour?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%" }}
        hide-tabs
        toolbar="hidden"
      ></tableau-viz>
    </>
  );}
