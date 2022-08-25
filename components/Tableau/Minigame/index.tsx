import React from "react";
import TableauViz from "../tableau";

export default function Minigame({ show }: { show?: boolean }) {
  return (
    <div style={{ display: show ? "block" : "none", flex: show ? 1 : 0 }}>
      <TableauViz src="https://public.tableau.com/views/GigWorkMini-Game4-withMap/4-TestYourSuccess?:language=en-US&:display_count=n&:origin=viz_share_link" />
    </div>
  );
}
