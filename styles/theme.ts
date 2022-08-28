import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bf5700",
    },
  },
});
export default theme;

// declare module "@mui/material/styles" {
//   interface Theme {
//     palette: {
//       primary: {
//         main: string;
//       };
//       secondary: {
//         main: string;
//       };
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     palette?: {
//       primary?: {
//         main?: string;
//       };
//       secondary?: {
//         main?: string;
//       };
//     };
//   }
// }
