import React from "react";
import TableauViz from "../../tableau";

export type PersonalProps = {
  id: number;
  name: string;
};

export default function PersonalEarningsPerHour({ id, name }: PersonalProps) {
  return (
    <>
      <TableauViz
        src={`https://public.tableau.com/views/ID${id}-${name}/AverageEarningsbyHour?:language=en-US&:display_count=n&:origin=viz_share_link`}
        style={{ width: "100%", flex: 1 }}
      />
    </>
  );
}
