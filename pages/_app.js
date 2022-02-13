import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: `calc(100vh - ${theme.spacing(16)}px)`
  }
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes =useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="xl" disableGutters={true} >
          <Header></Header>
          <Container className={classes.container}>
            <Component {...pageProps} />
          </Container>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
