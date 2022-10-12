// libs
import React from "react";
import type { AppProps } from "next/app";
// others
import "antd/dist/antd.css";
import "~/styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
