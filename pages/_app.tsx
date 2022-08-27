import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { LocationProvider } from "../components/Provider/Location";
import { AuthProvider } from "../components/Provider/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LocationProvider>
        <Component {...pageProps} />
      </LocationProvider>
    </AuthProvider>
  );
}

export default MyApp;
