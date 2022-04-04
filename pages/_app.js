import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

export default function MyApp(props) {
  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="100%" sx={{ m: 0}} disableGutters={true}>
          <Header></Header>
          <Container
            disableGutters={true}
            sx={(theme) => ({
                minHeight: `calc(100vh - ${theme.spacing(16)})`
            })}
          >
            <Component {...pageProps} />
          </Container>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
