import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { LocationProvider } from "../components/Provider/Location";
import { AuthProvider } from "../components/Provider/Auth";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LocationProvider>
        {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </LocationProvider>
    </AuthProvider>
  );
}

export default MyApp;
