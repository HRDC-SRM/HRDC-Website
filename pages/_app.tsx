// Basic Imports
import React from "react";
import type { AppProps } from "next/app";

// Components Imports
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Styles Imports
import "@/styles/globals.css";
import 'react-tooltip/dist/react-tooltip.css'

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
