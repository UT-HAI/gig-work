import React from "react";
import TableauViz from "../../tableau";

export default function PersonalEarningsPerHour() {
  return (
    <>
      <TableauViz
        src="https://public.tableau.com/views/Personal1_16607973716650/AverageEarningsbyHour?:language=en-US&:display_count=n&:origin=viz_share_link"
        style={{ width: "100%" }}
      />
    </>
  );
}
