import React from "react";
import TableauViz from "../../tableau";
import { PersonalProps } from "../Hourly";

export default function PersonalEarningsPerDay({ id, name }: PersonalProps) {
  return (
    <>
      <TableauViz
        src={`https://public.tableau.com/views/ID${id}-${name}/AverageEarningsbyDay?:language=en-US&:display_count=n&:origin=viz_share_link`}
        height="100%"
        style={{ width: "100%", flex: 1 }}
      />
    </>
  );
}
