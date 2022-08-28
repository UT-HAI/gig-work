import React from "react";
import TableauViz from "../tableau";

type MinigameProps = {
  id: string;
  show?: boolean;
};
export default function Minigame({ show, id }: MinigameProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        visibility: show ? "visible" : "hidden",
        flex: show ? "" : 1,
        overflow: "scroll",
      }}
    >
      <TableauViz
        id={id}
        style={{ width: 1050, height: 2027 }}
        src={
          "https://public.tableau.com/views/GigWorkMini-Game4-withMap/4-TestYourSuccess?:language=en-US&:display_count=n&:origin=viz_share_link"
        }
      />
    </div>
  );
}
