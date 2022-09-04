// @ts-nocheck
import React, { useMemo } from "react";

// const getHeight = (height?: number | string) => {
//   if (!height) {
//     return null;
//   }
//   if (typeof height === "number") {
//     return `${height + 27}px`;
//   }
//   if (typeof height === "string") {
//     return `calc(${height} + 27px)`;
//   }
// };

type TableauVizProps = {
  src: string;
  style?: object;
  id?: string;
  height?: string | number;
  width?: string | number;
};
export default function TableauViz({
  id,
  src,
  style,
  height,
  width,
}: TableauVizProps) {
  const styleProps = useMemo(() => {
    let props = style;
    if (width) {
      props = { ...props, width };
    }
    if (height) {
      props = { ...props, height };
    }
    return props;
  }, [style, height, width]);
  return (
    <tableau-viz
      id={id ?? "tableauViz"}
      src={src}
      style={styleProps}
      hide-tabs
      // toolbar="no"
    ></tableau-viz>
  );
}

// import {
// //   TableauViz,
//   TableauEventType,
//   SelectionUpdateType
// } from "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js";
// import { useEffect } from "react";
// // let vizObject
// let tableau = window.tableau
// const handleTabSwitched = async (e) => {
//     console.log(e)
//     const event = e.detail
// console.log(event)
// console.log(await event.getMarksAsync())
// }

// const SimpleReport = () => {
//   let viz;
//   useEffect(() => {
//     viz = document.getElementById("tableauViz");
//     viz.addEventListener("tabswitched", handleTabSwitched)
//     viz.addEventListener("markselectionchanged", handleTabSwitched)

//     // viz = new TableauViz();

//     // const handleMarkSelection = () => {
//     //   alert("Mark(s) selected!");
//     //   // code to handle the mark selection goes here
//     // };

//     // viz.src = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
//     // viz.toolbar = "hidden";
//     // viz.addEventListener(
//     //   TableauEventType.MarkSelectionChanged,
//     //   handleMarkSelection
//     // );
//     // document?.getElementById("tableauViz")?.appendChild(viz);
//   });

//   const handleClick = async () => {
//     // console.log(viz.workbook);
//     const sheet = viz.workbook.activeSheet;
//     const dashboardObjects = sheet.objects;
//     dashboardObjects.forEach((object) => {
//       console.log(object.type, object.name);
//       console.log(object);
//     });
//     sheet.selectMarksAsync("College", '', "select-replace");
//     // console.log(sheet.worksheets)
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Click Me!</button>
//       <tableau-viz
//         id="tableauViz"
//         src="https://public.tableau.com/views/ChicagoRideshareDataDashboardsv_1_0/NeighborhoodEarnings?:language=en-US&:display_count=n&:origin=viz_share_link"
//         style={{ width: "100%" }}
//         hide-tabs
//         toolbar="hidden"
//       ></tableau-viz>
//       {/* <div id="tableauViz" /> */}
//     </>
//   );
// };

// export default SimpleReport;
