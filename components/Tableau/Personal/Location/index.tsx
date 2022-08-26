import React from "react";
import TableauViz from "../../tableau";
import { PersonalProps } from "../Hourly";

export default function PersonalEarningsPerLocation({
  id,
  name,
}: PersonalProps) {
  return (
    <>
      <TableauViz
        src={`https://public.tableau.com/views/ID${id}-${name}/Pickups?:language=en-US&:display_count=n&:origin=viz_share_link`}
        style={{ width: "100%" }}
      />
    </>
  );
}
