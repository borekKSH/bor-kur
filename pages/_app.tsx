import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Website;
