import React from "react";
import useAppBarHeight from "../../hooks/useAppBarHeight";
import { STEPPER_HEIGHT } from "../../ScheduleStepper";
import TableauViz from "../tableau";

type MinigameProps = {
  id: string;
  show?: boolean;
};

export const MINIGAME_HEIGHT = 2527;
const MINIGAME_WIDTH = 650;

export default function Minigame({ show, id }: MinigameProps) {
  const appBarHeight = useAppBarHeight();
  return (
    <div
      style={{
        width: "100%",
        height: `calc(100vh - ${appBarHeight}px - (${STEPPER_HEIGHT}))`,
        display: "flex",
        justifyContent: "center",
        visibility: show ? "visible" : "hidden",
        flex: show ? "" : 1,
        overflow: "scroll",
      }}
    >
      <TableauViz
        id={id}
        style={{ width: MINIGAME_WIDTH, height: MINIGAME_HEIGHT }}
        src={
          "https://public.tableau.com/views/GigWorkMini-Game4-withMap/4-TestYourSuccess?:language=en-US&:display_count=n&:origin=viz_share_link"
        }
      />
    </div>
  );
}
